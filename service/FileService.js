'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const USERS_FILE = path.join(ROOT, 'file/users.json');

class FileService{

    static getUsersFile() {
        let data = null, fileExists = fs.existsSync(USERS_FILE);
        if (fileExists) {
            data = fs.readFileSync(USERS_FILE);
        }
        return {fileExists: fileExists, data: data};
    }
}

module.exports = FileService;