import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'

const app = express()

// ruta absoluta
const __dirname = import.meta.dirname

// middleware archivos estáticos
app.use(express.static('public'))
app.use('/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/assets/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))

// Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// Array de services
export const services = [
    {
        name: "Web Development",
        description: "We create web applications with the latest technologies.",
        url: "/services/web-development",
    },

    {
        name: "Mobile Development",
        description: "We create mobile applications with the latest technologies.",
        url: "/services/mobile-development",
    },

    {
        name: "DevOps",
        description: "We create CI/CD pipelines with the latest technologies.",
        url: "/services/devops",
    },

    {
        name: "QA",
        description: "We create test cases with the latest technologies.",
        url: "/services/qa",
    },

    {
        name: "UX/UI",
        description: "We create designs with the latest technologies.",
        url: "/services/ux-ui",
    },

    {
        name: "Training",
        description: "We create training with the latest technologies.",
        url: "/services/training",
    },

    {
        name: "Consulting",
        description: "We create consulting with the latest technologies.",
        url: "/services/consulting",
    },

    {
        name: "Outsourcing",
        description: "We create outsourcing with the latest technologies.",
        url: "/services/outsourcing",
    },
];

// view de Services
app.get('/services', (req, res) => {
    res.render('services');
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})





