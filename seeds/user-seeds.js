const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesdfsmo0',
    email: 'nwessdfedge0@cbc.ca',
    password: 'passsdfword123'
  },
  {
    username: 'jsfaoaaay1',
    email: 'rmebes1@sofgou.com',
    password: 'passdfssad123'
  },
  {
    username: 'ibodeefdam2',
    email: 'cstonemahwn2@last.fm',
    password: 'pgrword123'
  },
  {
    username: 'dasnber3',
    email: 'ihterer3@gr.ne.sdp',
    password: 'pasdem3'
  },
  {
    username: 'djrwi4',
    email: 'wyr@weathewtyr.com',
    password: 'paswrd123'
  },
  {
    username: 'msrewagrue5',
    email: 'larnrew5@imewrdb.com',
    password: 'paertrd123'
  },
  {
    username: 'mptens6',
    email: 'hnapletxseron6@feedbutener.com',
    password: 'paurewx123'
  },
  {
    username: 'tpexell7',
    email: 'kpwrigo7@chineom.cn',
    password: 'passw23'
  },
  {
    username: 'msabrtres8',
    email: 'lmonrt@ogle.ru',
    password: 'paertord123'
  },
  {
    username: 'Jmdsfthur',
    email: 'bstdfsen9@epagfgov',
    password: 'passwggfd23'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;