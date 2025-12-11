# Access Control Testing Guide

## 🔒 Understanding "Access Denied"

The "Access denied" message is a **security feature** that protects admin-only pages. Here's how it works:

---

## 📋 Access Control Rules

### Public Pages (Anyone can access)
- ✅ Home Page (`/`)
- ✅ Tours Listing (`/tours`)
- ✅ Tour Details (`/tours/:id`)
- ✅ Login (`/login`)
- ✅ Register (`/register`)

### User-Only Pages (Must be logged in)
- 🔐 My Bookings (`/profile`)
- 🔐 Book Tour (on tour details page)

### Admin-Only Pages (Must be logged in as admin)
- 🛡️ Dashboard (`/dashboard`)
- 🛡️ Add Tour (`/dashboard/add-tour`)
- 🛡️ Edit Tour (`/dashboard/edit-tour/:id`)

---

## 🧪 How to Test Access Control

### Test 1: Access Dashboard Without Login
1. Open browser in incognito/private mode
2. Go to `http://localhost:5173/dashboard`
3. **Expected Result:** Redirected to `/login` with message "Please login to access the dashboard"

### Test 2: Access Dashboard as Regular User
1. Login with regular user account:
   - Email: `user@tourism.com`
   - Password: `user`
2. Try to navigate to `/dashboard`
3. **Expected Result:** Redirected to home page with message "Access denied. Admin only."

### Test 3: Access Dashboard as Admin
1. Login with admin account:
   - Email: `admin@tourism.com`
   - Password: `admin`
2. Navigate to `/dashboard`
3. **Expected Result:** Dashboard loads successfully with tours table

### Test 4: Book Tour Without Login
1. Logout (if logged in)
2. Go to any tour details page
3. Click "Book Now"
4. **Expected Result:** Redirected to `/login` with message "Please login to book a tour"

### Test 5: Book Tour as Logged-in User
1. Login with any user account
2. Go to any tour details page
3. Click "Book Now"
4. **Expected Result:** Booking successful, redirected to `/profile` with success message

---

## 🎯 Expected Behavior Summary

| Action | Not Logged In | Regular User | Admin |
|--------|---------------|--------------|-------|
| View Home | ✅ Allow | ✅ Allow | ✅ Allow |
| View Tours | ✅ Allow | ✅ Allow | ✅ Allow |
| Book Tour | ❌ Redirect to Login | ✅ Allow | ✅ Allow |
| View Profile | ❌ Show "Please login" | ✅ Allow | ✅ Allow |
| View Dashboard | ❌ Redirect to Login | ❌ Access Denied | ✅ Allow |
| Add/Edit Tour | ❌ Redirect to Login | ❌ Access Denied | ✅ Allow |

---

## 🔍 What Was Fixed

### Before Fix:
- Dashboard would try to load even when user was `null` (not logged in)
- Could cause errors or unexpected behavior

### After Fix:
- ✅ Checks if user is logged in first
- ✅ Redirects to login if no user
- ✅ Checks if user is admin
- ✅ Redirects to home with "Access denied" if not admin
- ✅ Only loads dashboard data if user is admin

---

## 💡 Quick Test Commands

### Test as Regular User:
1. Go to http://localhost:5173/login
2. Login: `user@tourism.com` / `user`
3. Try to access: http://localhost:5173/dashboard
4. You should see: **"Access denied. Admin only."** toast

### Test as Admin:
1. Go to http://localhost:5173/login
2. Login: `admin@tourism.com` / `admin`
3. Go to: http://localhost:5173/dashboard
4. You should see: **Dashboard with tours table**

---

## ✅ Everything is Working Correctly!

The "Access denied" message you're seeing is the **security system working as intended**. It prevents regular users from accessing admin-only features like:
- Creating new tours
- Editing tours
- Deleting tours
- Viewing the admin dashboard

This is a **good thing** - it means your application is secure! 🔒
