import React from 'react';

import styles from './Card.module.css'

const Img = (props) => {
    return <img src={props.src} alt={props.alt} />
}

export default class Card extends React.Component {

    fillContent() {
        const uriImg = `http://openweathermap.org/img/w/${this.props.data.weather[0].icon}.png`
        const temp = this.props.data.main.temp - 273.15
        const monthShort = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        const date = new Date();
        const dt = date.getDate();
        const month = monthShort[date.getMonth()];
        const year = date.getFullYear();

        // Forecast date
        const dt1 = new Date(this.props.dataForecast.list[1].dt_txt)
        const dt2 = new Date(this.props.dataForecast.list[9].dt_txt)
        const dt3 = new Date(this.props.dataForecast.list[17].dt_txt)
        const dt4 = new Date(this.props.dataForecast.list[25].dt_txt)
        const dt5 = new Date(this.props.dataForecast.list[33].dt_txt)

        const day1 = dt1.getDate();
        const month1 = monthShort[dt1.getMonth()];
        const year1 = dt1.getFullYear();
        const temp1 = this.props.dataForecast.list[1].main.temp - 273.15
        const url1 = `http://openweathermap.org/img/w/${this.props.dataForecast.list[1].weather[0].icon}.png`

        const day2 = dt2.getDate();
        const month2 = monthShort[dt2.getMonth()];
        const year2 = dt2.getFullYear();
        const temp2 = this.props.dataForecast.list[9].main.temp - 273.15
        const url2 = `http://openweathermap.org/img/w/${this.props.dataForecast.list[9].weather[0].icon}.png`

        const day3 = dt3.getDate();
        const month3 = monthShort[dt3.getMonth()];
        const year3 = dt3.getFullYear();
        const temp3 = this.props.dataForecast.list[17].main.temp - 273.15
        const url3 = `http://openweathermap.org/img/w/${this.props.dataForecast.list[17].weather[0].icon}.png`

        const day4 = dt4.getDate();
        const month4 = monthShort[dt4.getMonth()];
        const year4 = dt4.getFullYear();
        const temp4 = this.props.dataForecast.list[25].main.temp - 273.15
        const url4 = `http://openweathermap.org/img/w/${this.props.dataForecast.list[25].weather[0].icon}.png`

        const day5 = dt5.getDate();
        const month5 = monthShort[dt5.getMonth()];
        const year5 = dt5.getFullYear();
        const temp5 = this.props.dataForecast.list[33].main.temp - 273.15
        const url5 = `http://openweathermap.org/img/w/${this.props.dataForecast.list[33].weather[0].icon}.png`
        return (
            <div>
                <h1 className={styles.card_title}>{this.props.data.name}</h1>
                <div className={styles.card_info}>
                    <div className={styles.weather}>
                        <img src={uriImg} alt={this.props.data.weather[0].description} />
                        <h2>{temp}°</h2>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.date}>
                            <span>{dt} </span><span>{month} </span><span> {year}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.description}>
                        <h4>{this.props.data.weather[0].description}</h4>
                    </div>
                    <div className={styles.sub_card}>
                        <div className={`${styles.des}`}>
                            <small>Wind</small>
                            <h2> {this.props.data.wind.speed}Km/h </h2>
                        </div>
                        <div className={`${styles.des}`}>
                            <small>Humidity</small>
                            <h2> {this.props.data.main.humidity}% </h2>
                        </div>
                        <div className={`${styles.des}`}>
                            <small>Pressure</small>
                            <h2> {this.props.data.main.pressure}hPa </h2>
                        </div>
                    </div>

                    <div className={styles.forecast}>
                        <h4>5 day forecast</h4>
                        <div className={styles.days}>
                            <div className={styles.day}>
                                <div className={styles.weather}>
                                    <Img src={url1} alt={this.props.dataForecast.list[1].weather[0].description} />
                                    <h2>{Math.floor(temp1)}°</h2>
                                </div>
                                <div className={styles.date}>
                                    <span> {day1} </span>
                                    <span> {month1} </span>
                                    <span> {year1} </span>
                                </div>
                            </div>
                            <div className={styles.day}>
                                <div className={styles.weather}>
                                    <Img src={url2} alt={this.props.dataForecast.list[9].weather[0].description} />
                                    <h2>{Math.floor(temp2)}°</h2>
                                </div>
                                <div className={styles.date}>
                                    <span> {day2} </span>
                                    <span> {month2} </span>
                                    <span> {year2} </span>
                                </div>
                            </div>
                            <div className={styles.day}>
                                <div className={styles.weather}>
                                    <Img src={url3} alt={this.props.dataForecast.list[17].weather[0].description} />
                                    <h2>{Math.floor(temp3)}°</h2>
                                </div>
                                <div className={styles.date}>
                                    <span> {day3} </span>
                                    <span> {month3} </span>
                                    <span> {year3} </span>
                                </div>
                            </div>
                            <div className={styles.day}>
                                <div className={styles.weather}>
                                    <Img src={url4} alt={this.props.dataForecast.list[25].weather[0].description} />
                                    <h2>{Math.floor(temp4)}°</h2>
                                </div>
                                <div className={styles.date}>
                                    <span> {day4} </span>
                                    <span> {month4} </span>
                                    <span> {year4} </span>
                                </div>
                            </div>
                            <div className={styles.day}>
                                <div className={styles.weather}>
                                    <Img src={url5} alt={this.props.dataForecast.list[33].weather[0].description} />
                                    <h2>{Math.floor(temp5)}°</h2>
                                </div>
                                <div className={styles.date}>
                                    <span> {day5} </span>
                                    <span> {month5} </span>
                                    <span> {year5} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className={styles.card}>
                {this.fillContent()}
            </div>
        )
    }

}