import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgIcon } from './svgIcon';

export type IconsName = "library" |
    'appStetting' |
    'mony' |
    'TAndConditions' |
    'privacyPolicy' |
    'logout' |
    'phone' |
    "music" |
    "live" |
    "search" |
    "upgrade" |
    'notification' |
    "close" |
    "error" |
    "songs" |
    "downloaded" |
    "artists" |
    'video' |
    "play" |
    "back" |
    "facebook" |
    "twitter" |
    "instagram" |
    "youtube" |
    "linkedin" |
    "wave" |
    "unfavorite" |
    "nextSong" |
    "pause" |
    "prodcust" |
    'menu' |
    'plus' |
    'recently' |
    "settings" |
    "searchInput" |
    "record" |
    'check' |
    "arrowRight"
export type IconsProps = {
    name?: IconsName
    icon: Function,
    color: String,
    size: Number,
    width: Number,
    height: Number,
    rotate: Boolean,
    style?: StyleProp<ViewStyle>;
}

function Icons(props: IconsProps) {
    switch (props.name) {
        case 'library':
        case 'music':
        case 'live':
        case 'search':
        case 'upgrade':
        case 'notification':
        case 'close':
        case 'songs':
        case 'downloaded':
        case 'artists':
        case 'video':
        case 'play':
        case 'back':
        case 'facebook':
        case 'twitter':
        case 'instagram':
        case 'youtube':
        case 'linkedin':
        case 'wave':
        case 'unfavorite':
        case 'nextSong':
        case 'pause':
        case 'prodcust':
        case 'menu':
        case 'plus':
        case 'recently':
        case "settings":
        case "searchInput":
        case "record":
        case 'check':
        case 'arrowRight':

        case 'appStetting':
        case "mony":
        case "TAndConditions":
        case "privacyPolicy":
        case 'logout':
        case 'phone':

            return <SvgIcon style={props.style} {...props} />
        default:
            return props.icon ? props.icon() : null
    }
}



Icons.defaultProps = {
    size: 14
}
export { Icons }