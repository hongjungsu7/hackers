'use strict';

class UserStorage {
    constructor({ id, pw }) {
        this.id = id;
        this.pw = pw;
    }

    loginUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((this.id === 'Id' && this.pw === 'password') ||
                    (this.id === 'hackers' && this.pw === '1234')) {
                    resolve(this.id);
                } else {
                    reject(new Error('not found'));
                }
            }, 1000);
        });
    }

    getTeam(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === 'Id') {
                    resolve({ name: 'Pro', team: 'web development' });
                } else if (userId === 'hackers') {
                    resolve({ name: 'hackers', team: 'module' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const id = prompt('enter your id');
const password = prompt('enter your password');
const userStorage = new UserStorage({ id: id, pw: password });

userStorage.loginUser()
    .then(userStorage.getTeam)
    .then(user => {
        alert(`Hello ${user.name}, You're on the ${user.team} team`);
    })
    .catch(alert);
