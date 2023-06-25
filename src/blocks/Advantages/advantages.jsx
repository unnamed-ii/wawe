import React from 'react';
import './advantages.scss';
import Container from "../../components/Container/container";
import {ReactComponent as SunIcon} from "../../images/icons/advantages/sun.svg";
import {ReactComponent as AirplaneIcon} from "../../images/icons/advantages/airplane.svg";
import {ReactComponent as SurfingGuyIcon} from "../../images/icons/advantages/serfing-guy.svg";

import {ReactComponent as ShortestGraphicIcon} from "../../images/icons/advantages/graphics/1.svg";
import {ReactComponent as AverageGraphicIcon} from "../../images/icons/advantages/graphics/2.svg";
import {ReactComponent as LongestGraphicIcon} from "../../images/icons/advantages/graphics/3.svg";

const AdvantagesData = [
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
]

const AdvantageCard = ({icon, title, text}) => {
    return (
        <div className="advantage-card">
            <div className="advantage-card__top">
                <div className="advantage-card__top-icon">
                    {icon}
                </div>
                <div className="advantage-card__top-title">
                    {title}
                </div>
            </div>
            <div className="advantage-card__text">
                {text}
            </div>
        </div>
    );
};

const GraphicCard = ({icon, title, percents}) => {
    return (
        <div className="graphic-card">
            <div className="graphic-card__top">
                <div className="graphic-card__top-icon">
                    {icon}
                </div>
                <div className="graphic-card__top-percents">
                    {percents} %
                </div>
            </div>
            <div className="graphic-card__title">
                {title}
            </div>
        </div>
    );
};

const Advantages = () => {
    return (
        <section className="advantages">
            <Container>
                <div className="advantages__inner">
                    <div className="advantages__inner-title">
                        В ШКОЛЕ ВЫ ПОЛУЧИТЕ <span>/</span>
                    </div>
                    <div className="advantages__inner-list">
                        {AdvantagesData.map(advantage => (
                            <AdvantageCard
                                icon={advantage.icon}
                                title={advantage.title}
                                text={advantage.text}
                            />
                        ))}
                    </div>
                    <div className="advantages__inner-statistics">
                        <div className="advantages__inner-statistics__graphics">
                            <GraphicCard
                                icon={<ShortestGraphicIcon/>}
                                title={'Приехали второй раз'}
                                percents={'85'}
                            />
                            <GraphicCard
                                icon={<AverageGraphicIcon/>}
                                title={'Научились кататься'}
                                percents={'95'}
                            />
                            <GraphicCard
                                icon={<LongestGraphicIcon/>}
                                title={'Довольных клиентов'}
                                percents={'99'}
                            />
                        </div>
                        <div className="advantages__inner-statistics__info">
                            <p>
                                Огромным преимуществом нашей школы является собственная методика обучения. Мы
                                разработали собственный стиль обучения серфингу, который позволяет новичкам максимально
                                быстро встать на доску.
                            </p>
                            <p>
                                Именно наша методика и наши преподаватели позволили нам пройти аттестацию Федерации
                                серфинга Канарских островов - FEDERACIÓN CANARIA DE SURF. Это означает, что наша школа
                                соответствует всем мировым стандартам. Переаттестация производится ежегодно и это
                                позволяет нам всегда стремиться к улучшению обучения.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Advantages;