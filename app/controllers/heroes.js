let Hero = require('../models/hero');

exports.getHeroes = function (req, res, next) {
    let nameFilter = {};
    if (req.query['name']) {
        nameFilter['name'] = new RegExp(req.query['name'], 'i');
    }
    Hero.find(nameFilter, function (err, heroes) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({ data: heroes });
        }
    });
}

    /* GET One Hero with the provided ID */
exports.getHeroById = function (req, res, next) {
    Hero.findOne({ _id: req.params.id }, function (err, hero) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({ data: hero });
        }
    });
}

/* POST/ADD a Hero */
exports.addHero = function (req, res, next) {
    Hero.create(req.body, function (err, hero) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json({ data: hero });
        }
    });
}

/* PUT/UPDATE a Hero */
exports.updateHero = function (req, res, next) {
    Hero.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true }, function (err, result) {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.status(200).json({ data: result });
        }
    });
}

/* DELETE a Hero */
exports.deleteHero = function (req, res, next) {
    Hero.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json({ data: result });
        }
    });
}