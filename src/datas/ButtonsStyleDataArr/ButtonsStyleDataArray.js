
import scissorIcon from '../../assets/icons/icon-scissors.svg';
import spockIcon from '../../assets/icons/icon-spock.svg';
import paperIcon from '../../assets/icons/icon-paper.svg';
import lizardIcon from '../../assets/icons/icon-lizard.svg';
import rockIcon from '../../assets/icons/icon-rock.svg';

export const buttonsStyleDataArray = [
    {
        type: 'scissors',
        gradient: {
            background: `linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))`,
            boxShadow: `0 0.5rem 0 rgb(194 130 13)`,
        },
        icon: scissorIcon,
    },
    {
        type: 'spock',
        gradient: {
            background: `linear-gradient(hsl(189, 59%, 53%),hsl(189, 58%, 57%))`,
            boxShadow: `0 0.5rem 0 hsl(189, 49%, 44%)`,
        },
        icon: spockIcon,
    },
    {
        type: 'paper',
        gradient: {
            background: `linear-gradient(hsl(230, 89%, 65%),hsl(230, 89%, 62%))`,
            boxShadow: `0 0.5rem 0 rgb(66 87 190)`,
        },
        icon: paperIcon,
    },
    {
        type: 'lizard',
        gradient: {
            background: `linear-gradient(hsl(261, 73%, 63%),hsl(261, 72%, 60%))`,
            boxShadow: `0 0.5rem 0 rgb(98 64 161)`,
        },
        icon: lizardIcon,
    },
    {
        type: 'rock',
        gradient: {
            background: `linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))`,
            boxShadow: `0 0.5rem 0 rgb(156 45 66)`,
        },
        icon: rockIcon,
    },
];