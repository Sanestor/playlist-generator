# Playlist Generator Documentation

## Introduction:
< Playlist Generator Name > is a web application which will offer users an intuitive and easy way to manage playlists and automate Spotify playlist generation using artificial intelligence. While logged in, users will be able to see all of their active playlists with the option to always add more, modify current ones, or delete active playlists.

## Project Overview
Key features of < Playlist Generator Name > include:
- Logging in through the user's Spotify account
- Playlist generation through providing a prompt to an artificial intelligence model along with any requirements like song count or playlist title
- Editing all current playlists by adding or removing songs and changing the playlist title
- Deleting playlists currently saved on the user's account

## Tech Stack
### Frontend
- NextJS
- Tailwind

### Backend
- NextJS App Router
- Spotify API
- OpenAI API

## User Flows
### Authentication Flow
1. User is on landing page
2. User presses on "Log In with Spotify"
3. User agrees to the conditions presented and decides to login with their Spotify account
4. User gets redirected to home page where they can access all main functionality
### Playlist Generation with AI
1. User completes authentication flow and is on home page
2. User chooses to add a playlist to their Spotify account
3. User provides the text input field with the prompt of their choice and provides extra information for generation like a playlist name if they know what to call it and the number of songs they want in it
4. User presses Generate and awaits result
5. < Playlist Generator Name > will provide the user with a modifiable list view of their playlist and its songs of which they can drag and drop to rearrange, remove, or even add more (up to 100)
6. Once satisfied, the user can press on the "Add" button which will submit their playlist and they will be redirected to the landing page on which they can view their old and new playlists
### Playlist Generation Manually
1. User completes authentication flow and is on home page
2. User chooses to add a playlist to their Spotify account
3. < Playlist Generator Name > will provide the user with an empty list of songs suggesting that they add some songs to the playlist; here, they will also be able to name the playlist
4. User can add songs based on a search and select modal which can be closed at any point
5. Once satisfied, the user can press on the "Add" button which will submit their playlist and they will be redirected to the home page on which they can view their old and new playlists
### Playlist Deletion
1. User completes authentication flow and is on home page
2. User chooses to manage playlists from a section on the home page
3. Once on playlist management section, all playlists will be visible and the user can select the three dots on the playlist they wish to delete
4. On the mini menu that appears, the user can select delete
5. User can confirm deletion or cancel the action on a secondary modal which appears 
### Playlist Modification
1. User completes authentication flow and is on home page
2. User chooses to manage playlists from a section on the home page
3. Once on playlist management section, all playlists will be visible and the user can select the three dots on the playlist they wish to delete
4. On the mini menu that appears, the user can select modify
5. User can modify playlist name and its songs included until they are either willing to save changes or cancel the operation
### Signing Out
1. User selects profile image icon in header
2. In mini menu that appears they can select sign out to be taken back to the login page