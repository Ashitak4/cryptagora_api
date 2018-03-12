Crypatgorapi
============

Cryptagorapi is an API allowing our website to communicate with our database.

Pools Collection
------------
**Get pools informations [GET] /pool**

Request response give a JSON object containing all pools data. Here's a example of what the response look like :

~~~
+ Response 200 (application/json)

        {[
            {
            Crypto: {
                name: "Etherum",
                symbol: "ETH",
                logo: "chemin d'accès au logo",
                desc: "",
                value: {
                    time: "2018-08-05T08:40:51.620Z",
                    cost: 750,
                    },
            },
            hashrate: {
                    value: {
                        time: "2018-08-05T08:40:51.620Z",
                        speed: 7000,
                    },
            block: {
                coin: 20,
                blockvalidate: {
                    tag:5220107,
                    time: "2018-08-05T08:40:51.620Z"
                },
                algo: "JNSNUDZ909283HF7692JF82UU0",
            },
            remuneration:  {
                algo: "JNSNUDZ909283HF7692JF82UU0",
                taxe: 0.5,
                minimum: 0.1
            },
            user: [{
                wallet: "12345687654123456789",
                balance: {
                    totale: 10,
                    current: 5,
                    unconfirmed: 5,
                    payed: 5
                },
                createdate: "2018-08-05T08:40:51.620Z",
                autopayoutmin: 0.1,
                balancetransaction: {
                    date: "2018-08-05T08:40:51.620Z",
                    value: 1
                },
                worker: {
                    id: "987653457895457",
                    puissance: {
                        date: "2018-08-05T08:40:51.620Z",
                        value: 5409
                    },
                }
            }, ...]
            }, ...
        ]}
~~~

**Create a pool [POST] /pool**

In order to create a new pool you have to give the post request a payload containing all informations of the pools.
