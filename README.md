### Pre-requisites
* Docker
* Node

---

### How to start

* clone this repo
* open 3 terminals
* In 1st terminal run cd hacknroll23/frontend && npm i && npm start
* In 2nd terminal run cd hacknroll23/backend && docker-compose up
  * open another terminal and run `docker exec -it <container_id> /bin/bash`
    and then `psql -U postgres postgres < /var/lib/postgres/data`
* In 3rd terminal run cd hacknroll23/backend && npm i && npm run dev

---

Go to `http://localhost:3000`