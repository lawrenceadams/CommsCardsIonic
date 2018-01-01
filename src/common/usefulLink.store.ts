import { UsefulLink } from "./usefulLink.model";

/**
 * Links will appear in the order as below.
 * For a list of avaliable icons, see here: https://ionicframework.com/docs/ionicons/
 * For a list of avaliable colours, see here: https://ionicframework.com/docs/theming/theming-your-app/
 * Recommed leaving as primary
 */
export const USEFULLINKS: UsefulLink[] =
    [
        {
            title: "MedBlogs Home",
            color: "primary",
            icon: "home",
            address: "https://mbchb.dundee.ac.uk"
        },
        {
            title: "Dundee Chat",
            color: "primary",
            icon: "chatbubbles",
            address: "https://mbchb.dundee.ac.uk/commskills"
        }
    ]