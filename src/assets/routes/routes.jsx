import { Trans, useTranslation } from "react-i18next";
import img_1 from '../../assets/images/anten_3.png'
import img_2 from '../../assets/images/anten_5.png'
import img_3 from '../../assets/images/anten-img.png'
import img_4 from '../../assets/images/anten-img_2.png'

import map_1 from '../images/maps/turkey.png'
import map_2 from '../images/maps/iraq.png'
import map_3 from '../images/maps/libya.png'
import map_4 from '../images/maps/afghanistan.png'
import map_5 from '../images/maps/turkmenistan.png'
import map_6 from '../images/maps/europe.png'

export const routes = [
    {
        id: 1,
        head: 'TOOWAY',
        text_1: "tooway-text-1",
        text_2: 'tooway-text-2',
        text_3: 'tooway-text-3',
        imgSrc: img_1
    },
    {
        id: 2,
        head: 'AVANTI',
        text_1:  "avanti-text-1",
        text_2:  "avanti-text-2",
        text_3:  "avanti-text-3",
        imgSrc: img_2
    },
    {
        id: 3,
        head: 'THOR7',
        text_1: "thor7-text-1",
        text_2: "thor7-text-2",
        text_3: "thor7-text-3",
        imgSrc: img_3
    },
    {
        id: 4,
        head: 'IDIRECT',
        text_1: "idirect-text-1",
        text_2: "idirect-text-2",
        text_3: "idirect-text-3",
        imgSrc: img_4
    },
    {
        id: 5,
        head: 'SCPC',
        text_1:  "scpc-text-1",
        text_2:  "scpc-text-2",
        text_3:  "scpc-text-3",
        imgSrc: img_1
    },
    
]

export const routes_2 = [
    {
        id: 6,
        head: 'VSAT',
        text_1: "vsat-text",
        imgSrc: img_1
    },
    {
        id: 7,
        head: 'Network/Van',
        text_1: "network-van-text",
        imgSrc: img_2
    },
    {
        id: 8,
        head: 'Telephone(VOIP)',
        text_1: "telephone-text",
        imgSrc: img_3
    },
]

export const routes_3 = [
    {
       id: 9,
       head: 'Turkey',
       text_1: "turkey-text-1",
       text_2: "turkey-text-2",
       imgSrc: map_1
    },
    {
        id: 10,
        head: 'Iraq',
        text_1: "iraq-text-1",
        text_2: "iraq-text-2",
        imgSrc: map_2
     },
     {
        id: 11,
        head: 'Libya',
        text_1:  "libya-text-1",
        text_2: "libya-text-2",
        imgSrc: map_3
     },
     {
        id: 12,
        head: 'Afghanistan',
        text_1:  "afghanistan-text-1",
        text_2:  "afghanistan-text-2",
        text_3:  "afghanistan-text-3",
        imgSrc: map_4
     },
     {
        id: 13,
        head: 'Turkmenistan',
        text_1: "turkmenistan-text-1",
        text_2:"turkmenistan-text-2",
        text_3: "turkmenistan-text-3",
        imgSrc: map_5
     },
     {
        id: 14,
        head: 'Europe',
        text_1:  "europe-text-1",
        imgSrc: map_6
     },
]