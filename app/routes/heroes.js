let express = require('express');
let heroesController = require('../controllers/heroes');
let router = express.Router();
let passportRequires = require('../passport');

router.all('*', passportRequires.requireAuth);

router.route('/')
    .post(heroesController.addHero)
    .get(heroesController.getHeroes);
router.route('/:id')
    .get(heroesController.getHeroById)
    .put(heroesController.updateHero)
    .delete(heroesController.deleteHero);

module.exports = router;