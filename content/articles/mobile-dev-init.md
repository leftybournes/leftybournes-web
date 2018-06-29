---
title: "Mobile Development Initialize"
date: 2018-06-29T19:05:40+08:00
draft: false
---

## Getting into Mobile Development with Flutter

[Flutter](https://flutter.io) is a new way to build cross-platform mobile
applications and it's made by Google. This means you can build mobile apps
for Android and iOS (and maybe
[Fuchscia](https://en.wikipedia.org/wiki/Google_Fuchsia)?) with less work than
the usual. Traditionally, if you wanted to build apps for both platforms, you
would need to learn Objective-C/Swift, Kotlin/Java and both platforms' SDKs.
That's a lot of work. But now, it's easier through Flutter and Dart, the 
language which Flutter is built with. The other great thing is it's not too
hard to learn.

## Other Cross-Platform Libraries

Right now, you might ask, "How about React Native/Xamarin/Phonegap/etc?"

I tried out [React Native](https://facebook.github.io/react-native/) and it
just didn't feel right for me. I never got to try out [Xamarin](https://visualstudio.microsoft.com/xamarin/) because it was and is not
available on Linux, which I use as my daily driver. And I never really liked
the idea of writing HTML, CSS and Javascript for mobile, which a lot of the
other libraries do. Considering Flutter was native and cross-platform, it felt
just right.

## The Pains of Android Development

Before I ever knew about these libraries, I first tried to learn Android
Development. The exeperience was a pain. Handling asynchronous tasks was so
awkward, I needed third party libraries to work around it. Working with
backwards compatibility was awkward. I'll just link to this short article that
explains the [pains of Android developers](https://medium.com/@drinfo/fuck-you-android-framework-ddbb02c4ae48)
better than I can.

## Flutter to the Rescue

This is where Flutter comes in. Before I started learning Android development,
I learned web development, including [React.js](https://reactjs.org), which is
a Javascript library used to build reactive user interfaces for the web. It
turns out, Flutter took inspiration from React, which means it follows the same
patterns in developing interfaces. As I was learning how to build apps with 
Flutter, it had a familiar feeling and that made development much smoother for
me. To make things better, common Material Design and Cupertino (iOS-style)
widgets like Floating Action Buttons, list tiles, confirmation dialogs, date 
and time pickers and more are provided out of the box, making interface design
easier. Mobile development has never been more fun.

While I think Flutter is a great tool, I don't think it's a one size fits all
solution. It helps make cross-platform mobile development but there may be
situations where developers would need to take advantage of the libraries built
by each platform. It'll depend on the app a developer is trying to build. As
for me, I'll be using Flutter as much as I can.