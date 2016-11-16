import { Router } from 'express';

const router = new Router();

const PERSON_DATA = {
	users : [
		{ avator: 'http://xxx.com', name: 'John', age: 23 },
    	{ avator: 'http://xxx.com', name: 'Amy', age: 18 },	
	]
};

// Write your restful api here:
router.get('/users', (req, res) => {
	res.json(PERSON_DATA);
});

router.get('/users/:id', (req,res) => {
	const id = Number(req.params.id);
	//console.log(id)
	if (id <= PERSON_DATA.users.length && id > 0) {
		//console.log(PERSON_DATA.users[id-1])
		res.json(PERSON_DATA.users[id-1]);
	} else {
		res.send('404');
	}
});


export default router;
