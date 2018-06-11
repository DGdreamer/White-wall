"use strict";


var WhitingWall = function () {};

WhitingWall.prototype = {
    init: function () {},
    set: function (key,key1,value) {
        var defaultData = JSON.parse(LocalContractStorage.get(key));
        var data = Object.prototype.toString.call(defaultData) == '[object Array]' ? defaultData : [];
        var time = Blockchain.transaction.timestamp;
        data.push({
            key: key,
            key1: key1,
            value: value,
            time: time
        });
        if (data.length > 1) {
            LocalContractStorage.del(key);
            LocalContractStorage.del(key1);
        };
        LocalContractStorage.set(key,key1, JSON.stringify(data));


        var defaultAllData = JSON.parse(LocalContractStorage.get('allWhitingWall-a-b-c-d'));
        var allData = Object.prototype.toString.call(defaultAllData) == '[object Array]' ? defaultAllData : [];
        allData.push({
            key: key,
            key1: key1,
            value: value,
            time: time
        });
        if (allData.length > 1) {
            LocalContractStorage.del('allWhitingWall-a-b-c-d');
        };
        LocalContractStorage.set('allWhitingWall-a-b-c-d', JSON.stringify(allData));
    },
    getAll: function () {
        return LocalContractStorage.get('allWhitingWall-a-b-c-d');
    },
    get: function (key) {
        key = key.trim();
        if ( key === "" ) {
            throw new Error("empty key")
        }
        return LocalContractStorage.get(key);
    }
};
module.exports = WhitingWall;
