# music_api

This is a no server project that utilizes Spotify's api to search artists, albums, and tracks. I have also added in a midi controller.
The midi controller is activated by clicking the midi button on the side menu. Once the midi button has been pressed, you will be able to
press the midi buttons allowing you to DJ on any page. In addition to the midi page, you are able to use your number key pad as the
controller. Keys 0-9 have pre-set sounds. Data persists only due to local storage. Please do not use a real username or password due
to all data being stored in local storage. If you forget your username or login, inspect application then go to local storage and it will show the
current user and the corresponding password.

### Getting Started

##Login page

You will need to login to be able to save favorite artists, albums, or tracks. If you haven't created a username and password you
will need to go to the create user page. Once created, login in and then you will be directed to your favorites page.

##Create page

Please do not use real usernames or passwords. This is a no server project, to make data persist I have used local storage. Type in a
username and password.

```
Example
username: Hello
Password: world565
Confirm Password: world565
```

##Favorites page

To view liked artists, albums, and tracks, you will need to press one of the three buttons on the top of the page. If you haven't liked
anything, you should head over to the search page. Press the search button on the side menu and this will direct you to the search page. If you have
something and you don't want it in your favorites, there is a minus button on each item. Click the minus button and it will remove the item from your
favorites list.

##Search page

There are three input boxes at the top of the page. First input box is for searching artists, the second is for searching albums,
and the last input is for tracks. Spotify only allows 30 second clips of their tracks to be requested. There will be a thumbs up button
on each artist, album, or track. Press this if you would like to add the item to your favorites list. Once added to your favorites list,
you can view them by pressing the favorites button on the side menu. There are previous and next page buttons at the top right of the page.

##Midi Controller

Press the midi button on the side bar. This will do two things; first it will direct you to the midi page, then it will activate your number
key pad as a midi controller. Once your side number key pad is activated, you will be able to use it on any page. If you do not have a
side number key pad, you are able to use the midi controller on the midi page. Midi controller allows you to DJ to tracks or to make your
own music.


### Built With

* AngularJS
* JQuery

## Authors

* **Deven Olson**
