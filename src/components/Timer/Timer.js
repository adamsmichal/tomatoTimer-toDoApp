import React, { Component } from 'react';
import Clock from './Clock/Clock';
import StartButton from './StartButton/StartButton';
import SettingsButton from './SettingsButton/SettingsButton';
import SettingsPopup from './SettingsPopup/SettingsPopup';

class Timer extends Component {
    state = { 
        hr: 0,
        min: 0,
        sec: 3,
        workHours: 0,
        workMinutes: 30,
        shortBreak: 7,
        longBreak: 15,
        breakTime: true,
        active: false,
        isOpen: false,
    }
    
    //set interval and call counting function
    handleStartButtonClick = () => {
        if(this.state.active) {
            clearInterval(this.idInterval);
        } else {
            this.idInterval = setInterval(() => this.countdown(), 1000)
        }

        this.setState({
            active: !this.state.active,
            isOpen: false
        })
    }

    //start counting and make some noise when finish
    countdown = () => {
        if(this.state.sec === 0) {
           if(this.state.min === 0) {
               if(this.state.hr === 0) {
                   if (this.state.breakTime) {
                        this.setState({
                            hr: 0,
                            min: this.state.shortBreak,
                            sec: 0,
                            breakTime: false,
                        })
                   } else {
                        this.setState({
                            hr: this.state.workHours,
                            min: this.state.workMinutes,
                            sec: 0,
                            breakTime: true,
                        })
                   }
                   this.countdown();
               } else {
                   this.setState({
                       hr: this.state.hr - 1,
                       min: this.state.min + 59
                   })
               }
           } else {
               this.setState({
                   min: this.state.min -1,
                   sec: this.state.sec + 59,
               })
           }
        } else {
            this.setState({
                sec: this.state.sec - 1
            })
        }
    }

    //open and close settings popup(also when user can do it)
    handleSettingsButtonClick = () => {
        if (this.state.active === false) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    handleAddHrClick = () => {
        if (this.state.workHours < 5){
            this.setState({
                hr: this.state.hr + 1,
                workHours: this.state.workHours + 1,
            })
        }
    }

    handleSubHrClick = () => {
        if (this.state.workHours > 0) {
            this.setState({
                hr: this.state.hr - 1,
                workHours: this.state.workHours - 1, 
            })
        }
    }

    handleAddMinClick = () => {
        if (this.state.workMinutes < 60) {
            this.setState({
                min: this.state.min + 1,
                workMinutes: this.state.workMinutes + 1,
            })
        }
    }

    handleSubMinClick = () => {
        if (this.state.workMinutes > 1) {
            this.setState({
                min: this.state.min - 1,
                workMinutes: this.state.workMinutes - 1, 
            })
        }
    }

    handleAddShortBreakClick = () => {
        if (this.state.shortBreak < 9) {
            this.setState({
                shortBreak: this.state.shortBreak + 1, 
            })
        }
    }

    handleSubShortBreakClick = () => {
        if (this.state.shortBreak > 1) {
            this.setState({
                shortBreak: this.state.shortBreak - 1, 
            })
        }
    }

    handleAddLongBreakClick = () => {
        if (this.state.longBreak < 20) {
            this.setState({
                longBreak: this.state.longBreak + 1, 
            })
        }
    }

    handleSubLongBreakClick = () => {
        if (this.state.longBreak > 10) {
            this.setState({
                longBreak: this.state.longBreak - 1, 
            })
        }
    }

    render() { 
        const { active, isOpen, breakTime } = this.state;
        return (
            <React.Fragment>
                <Clock {...this.state}/>
                <StartButton active={active} startCounting={this.handleStartButtonClick} />
                <SettingsButton openSettings={this.handleSettingsButtonClick} />
                <SettingsPopup 
                    isOpen={isOpen}
                    breakTime={breakTime}
                    addHr={this.handleAddHrClick}
                    subHr={this.handleSubHrClick}
                    addMin={this.handleAddMinClick}
                    subMin={this.handleSubMinClick}
                    addShortBreak={this.handleAddShortBreakClick}
                    subShortBreak={this.handleSubShortBreakClick}
                    addLongBreak={this.handleAddLongBreakClick}
                    subLongBreak={this.handleSubLongBreakClick}
                />
            </React.Fragment>
        );
    }
}
 
export default Timer;