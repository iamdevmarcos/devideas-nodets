type ProjectLevel = 'Beginner' | 'Intermediate' | 'Advanced';
type Project = {
    level: ProjectLevel,
    image: string,
    name: string,
    link: string
}

const data: Project[] = [
    {
        level: 'Beginner',
        image: 'beginner/01_bin2dec.png',
        name: 'Bin2Dec',
        link: 'https://github.com/email2vimalraj/Bin2Dec'
    },
    {
        level: 'Beginner',
        image: 'beginner/02_calculator.png',
        name: 'Calculator',
        link: 'https://codepen.io/mjijackson/pen/xOzyGX'
    },
    {
        level: 'Beginner',
        image: 'beginner/03_countdownTimer.png',
        name: 'Countdown Timer',
        link: 'https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/'
    },
    {
        level: 'Beginner',
        image: 'beginner/04_firstDbApp.png',
        name: 'First DB App',
        link: 'https://www.section.io/engineering-education/working-with-databases-part2/'
    },
    {
        level: 'Beginner',
        image: 'beginner/05_githubStatus.png',
        name: 'GitHub Status',
        link: 'https://peterluczynski.github.io/github-status/'
    },
    {
        level: 'Beginner',
        image: 'beginner/06_sliderImage.png',
        name: 'Slider Design',
        link: 'https://codepen.io/FlorinPop17/full/LvOroe'
    },
    {
        level: 'Beginner',
        image: 'beginner/07_quiz.png',
        name: 'Quiz App',
        link: 'https://github.com/SafdarJamal/quiz-app'
    },
    {
        level: 'Beginner',
        image: 'beginner/08_pomodoroClock.png',
        name: 'Pomodoro Clock',
        link: 'https://codepen.io/freeCodeCamp/full/XpKrrW'
    },
    {
        level: 'Beginner',
        image: 'beginner/09_weather.png',
        name: 'Weather App',
        link: 'https://codepen.io/tutsplus/pen/gObLaEP'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/01_todoapp.png',
        name: 'To-Do App',
        link: 'https://todomvc.com/examples/react/#/'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/02_passwordgenerator.png',
        name: 'Password Generator',
        link: 'https://codepen.io/FlorinPop17/full/BaBePej'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/03_githubprofiles.png',
        name: 'GitHub Profiles',
        link: 'https://github.com/GabrielNBDS/GitHub-Profiles'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/04_bookfinderapp.png',
        name: 'Book Finder App',
        link: 'https://book-finder-by-deyl.netlify.app/'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/05_currencyconverte.png',
        name: 'Currency Converter',
        link: 'https://acodedoer.github.io/currency-converter/'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/06_cardmemorycard.png',
        name: 'Card Memory Game',
        link: 'https://codepen.io/zerospree/full/bNWbvW'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/07_imagescanner.png',
        name: 'Image Scanner',
        link: 'https://github.com/alexzaitsev/ocr-google-vision'
    },
    {
        level: 'Intermediate',
        image: 'intermediate/08_simpleonlinestore.png',
        name: 'Simple Online Store',
        link: 'https://codepen.io/RSH87/pen/RagqEv'
    },
    {
        level: 'Advanced',
        image: 'advanced/01_calendar.png',
        name: 'Calendar',
        link: 'https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d'
    },
    {
        level: 'Advanced',
        image: 'advanced/02_chat.png',
        name: 'Chat App',
        link: 'https://github.com/dularish/Simple-TCP-Socket-based-Chat-App'
    },
    {
        level: 'Advanced',
        image: 'advanced/03_movieapp.png',
        name: 'Movie App',
        link: 'http://phobic-heat.surge.sh/'
    },
    {
        level: 'Advanced',
        image: 'advanced/04_podcast.png',
        name: 'Podcast Library',
        link: 'https://github.com/puppeteer/puppeteer'
    },
    {
        level: 'Advanced',
        image: 'advanced/05_instagramclone.png',
        name: 'Instagram Clone',
        link: 'https://www.instagram.com/'
    },
    {
        level: 'Advanced',
        image: 'advanced/06_fastfoodsimulator.png',
        name: 'Fast Food Simulator',
        link: 'https://www.ifood.com.br/'
    },
]

export const ProjectIdeas = {
    getAll: (): Project[] => {
        return data;
    },
    getByLevel: (level: ProjectLevel): Project[] => {
        return data.filter(item => item.level === level);
    },
    getByProjectName: (name: string) => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
};