# Firebase Setup Guide for USD AI Research Lab Blog

This guide will help you set up Firebase for the blog authentication and database.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it something like "usd-ai-research-blog"
4. Follow the setup wizard (you can disable Google Analytics)

## Step 2: Enable Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** provider
3. Click "Save"

## Step 3: Create Firestore Database

1. Go to **Firestore Database** in the Firebase Console
2. Click "Create database"
3. Start in **production mode** (we'll add security rules)
4. Choose a location close to your users

## Step 4: Set Up Firestore Security Rules

Go to **Firestore Database** > **Rules** and paste these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Authors collection - users can only read/write their own profile
    match /authors/{userId} {
      allow read: if request.auth != null && request.auth.uid == userId;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Blog posts collection
    match /blog_posts/{postId} {
      // Anyone can read published posts
      allow read: if resource.data.status == 'published';
      
      // Authenticated users can read their own drafts
      allow read: if request.auth != null && resource.data.authorId == request.auth.uid;
      
      // Authenticated users can create posts (only their own)
      allow create: if request.auth != null 
                    && request.resource.data.authorId == request.auth.uid;
      
      // Users can only update/delete their own posts
      allow update, delete: if request.auth != null 
                            && resource.data.authorId == request.auth.uid;
    }
  }
}
```

## Step 5: Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll to "Your apps" section
3. Click the Web icon (`</>`) to add a web app
4. Register the app (name it "USD AI Blog")
5. Copy the Firebase config object

## Step 6: Create Environment File

Create a `.env` file in your project root with these values:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**⚠️ Important:** Never commit `.env` to version control!

## Step 7: Add Authorized Authors

To allow specific people to create accounts:

### Option A: Open Registration (Default)
Anyone can register and create blog posts. Good for a research lab where you trust all members.

### Option B: Admin-Approved Registration
1. Create a Firebase Cloud Function to verify email domains (e.g., only @usd.edu)
2. Or manually enable/disable users in Firebase Console > Authentication > Users

### Option C: Invitation-Only (Recommended)
1. Create accounts manually in Firebase Console
2. Or create an admin page to invite users

## Step 8: Firestore Indexes

For better query performance, create these indexes in **Firestore** > **Indexes**:

1. Collection: `blog_posts`
   - Field: `status` (Ascending) + `publishedAt` (Descending)
   
2. Collection: `blog_posts`
   - Field: `authorId` (Ascending) + `updatedAt` (Descending)

3. Collection: `blog_posts`
   - Field: `status` (Ascending) + `tags` (Contains) + `publishedAt` (Descending)

## Usage

### For Authors:
1. Go to `/blog/login`
2. Register with email/password
3. Access dashboard at `/blog/dashboard`
4. Create/edit posts with Markdown editor

### For Readers:
1. Visit `/blog` to see all published posts
2. Click on any post to read the full content

## Security Notes

- Each author can ONLY see and edit their own posts
- Published posts are visible to everyone
- Draft posts are only visible to their author
- User authentication is required for all write operations
- Consider implementing email verification for production

## Troubleshooting

### "Permission denied" errors
- Check that security rules are published
- Ensure user is logged in
- Verify authorId matches the logged-in user

### Posts not showing up
- Check that posts have `status: 'published'`
- Verify Firestore indexes are created

### Login issues
- Ensure Email/Password auth is enabled
- Check Firebase config values are correct
