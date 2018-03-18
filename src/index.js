// @flow
import http from 'http';
import API from './API';

const server = new API().getServer();
server.listen(3000);