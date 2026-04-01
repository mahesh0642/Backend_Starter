import express from 'express';
const router = express.Router();

router.use((req, res, next) => {
    console.log("This is between router and api");
    next();
  });

router.get('/', (req, res)=>{
    res.send('welcome to web-dev cohort');
})

export default router;