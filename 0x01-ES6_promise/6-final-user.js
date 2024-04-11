import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';
export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then((results) => {
            for (const result of results) {
                if (result.status === 'rejected') {
                    result.value = `Error: ${result.reason.message}`;
                    delete result.reason;
                }
            }
            return results;
        });
}
