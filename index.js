import Redis from 'ioredis';

const redis =  new Redis();

redis.set('name','Karthik Mannepalli');
redis.get('name', (err,result) =>{ 
    console.log(result);
});
