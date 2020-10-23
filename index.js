class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    start() {
        
         setInterval(() => {
            const currentTime = Date.now();
            const targetDateUnix = Date.parse('Oct 29, 2021');
            const leftTime = targetDateUnix - currentTime;
            const time = this.getTimeComponents(leftTime);
            this.updateTime(time);
        }, 1000);
    }
    
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };

    }

    pad(value) {
    return String(value).padStart(2, '0');
    }
    
 
    updateTime({ days, hours, mins, secs }) {
        const timeInterface = document.querySelector(this.selector);
        const dateInterface = timeInterface.querySelector('span[data-value = "days"]');
        const hoursInterface = timeInterface.querySelector('span[data-value = "hours"]');
        const minsInterface = timeInterface.querySelector('span[data-value = "mins"]');
        const secsInterface = timeInterface.querySelector('span[data-value = "secs"]');
        dateInterface.textContent = `${days}`;
        hoursInterface.textContent = `${hours}`;
        minsInterface.textContent = `${mins}`;
        secsInterface.textContent = `${secs}`;
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

window.addEventListener('DOMContentLoaded', timer.start.bind(timer));



/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);