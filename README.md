jQuery Keyboard Navigation plugin
=================================

[**View Demo**](http://firedev.com/jquery.keynav/)

This plugin allows you to navigate a set of links layed out in a matrix from keyboard:

    [_ITEM_] [ item ] [ item ] [ item ]
    [ item ] [ item ] [ item ] [ item ]
    [ item ] [ item ]

The rows should have the same vertical offset. You can mark one element with `.selected` class, or the first one will be selected.

Enter key replaces `window.location.href` with the current `href` value.

Usage:
------

    $('#navigation a').keynav();

This will enable keyboard navigation for the links in `#navigation` container. If you need to have some control on the state of plugin you can pass the additional function as a single parameter:

    $('#navigation a').keynav(function(){
			return window.keyNavigationDisabled;
    });

Note: If the function passed returns `true` - keyboard navigation stops.