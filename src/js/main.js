let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const buttons = document.querySelectorAll('.dashboard__button')

const activateButton = (button) =>{
    buttons.forEach(btn => btn.classList.remove('dashboard__button--active'))
    button.classList.add('dashboard__button--active')
} 

const clearCards = () => {
    const cards = document.querySelectorAll('.dashboard__card');

    cards.forEach(card => card.remove())
}

const showCards = (optionButton) => {

    clearCards();

    const dashboard = document.querySelector('.dashboard');

    const calcFrame = (optionButton) => {
        if(optionButton === 'daily'){
            return 'Yestarday';
        }else if(optionButton === 'weekly'){
            return 'Last Week';
        }else if(optionButton === 'monthly'){
            return 'Last Month';
        }
    }

    data.forEach(json => {
        const title = json.title,
        className = title.toLowerCase().replace(' ','-'),
        timeframes = json.timeframes[optionButton],
        previousFrame = calcFrame(optionButton),
        card = document.createElement('div');
        
        let cardHtml = `
            <div class="dashboard__bg dashboard__bg--${className}">
            <img src="./src/images/icon-${className}.svg" alt="" class="dashboard__img">
            </div>
            <div class="dashboard__info">
            <div class="dashboard__name">
                <p class="dashboard__p dashboard__p--title">${title}</p>
                <img src="./src/images/icon-ellipsis.svg" alt="icon" class="dashboard__select">
            </div>
            <div class="dashboard__data">
                <h3 class="dashboard__h3 dashboard__h3--hour dashboard__daily" >${timeframes.current}hrs</h3>
                <p class="dashboard__p dashboard__p--previous">${previousFrame} - <span class="dashboard__lastDaily">${timeframes.previous}hrs</span></p>
            </div>        
            </div>
        
        `;

        card.classList.add('dashboard__card')
        card.innerHTML = cardHtml;
        dashboard.append(card);
    })

    

}

buttons.forEach(button => {
    button.addEventListener('click',() => {
        activateButton(button);
        const optionButton = button.dataset.option
        showCards(optionButton)
    })
})