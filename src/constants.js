import React from "react";
import {ReactComponent as SunIcon} from "./images/icons/advantages/sun.svg";
import {ReactComponent as AirplaneIcon} from "./images/icons/advantages/airplane.svg";
import {ReactComponent as SurfingGuyIcon} from "./images/icons/advantages/serfing-guy.svg";
import {ReactComponent as ShortestGraphicIcon} from "./images/icons/advantages/graphics/1.svg";
import {ReactComponent as AverageGraphicIcon} from "./images/icons/advantages/graphics/2.svg";
import {ReactComponent as LongestGraphicIcon} from "./images/icons/advantages/graphics/3.svg";

export const AdvantagesListData = [
    {
        icon: <SunIcon/>,
        title: 'ПРОЖИВАНИЕ',
        text: 'Наша школа серфинга находится в 100 м от океанского побережья. К услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней террасы открывается вид на океан. Расстояние до центра города 15 мин. ',
    },
    {
        icon: <AirplaneIcon/>,
        title: 'ПЕРЕЛЕТ И СТРАХОВКУ',
        text: 'Все участники программы застрахованы страховой компанией Allianz. Перелет из Тенерифе до острова Лансароте  и обратно входит в стоимость программы',
    },
    {
        icon: <SurfingGuyIcon/>,
        title: 'ОБУЧЕНИЕ И ЭКИПИРОВКУ',
        text: 'Все оборудование и экипировка известных производителей и предоставляется на весь курс программы. Тренировочный процесс начинается с определения вашего уровня катания ',
    },
];

export const AdvantagesStatisticsData = [
    {
        icon: <ShortestGraphicIcon/>,
        title: 'Приехали второй раз',
        percents: '85'
    },
    {
        icon: <AverageGraphicIcon/>,
        title: 'Научились кататься',
        percents: '95'
    },
    {
        icon: <LongestGraphicIcon/>,
        title: 'Довольных клиентов',
        percents: '99'
    }
];

export const AdvantagesInfoData = [
    {
        text: 'Огромным преимуществом нашей школы является собственная методика обучения. Мы разработали собственный стиль обучения серфингу, который позволяет новичкам максимально быстро встать на доску.'
    },
    {
        text: 'Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа соответствует всем мировым стандартам. Переаттестация производится ежегодно и это позволяет нам всегда стремиться к улучшению обучения.'
    },
]