import { resourceCRUD } from '@/api/resources';
import BaseResource from './base';

const crudAPI = resourceCRUD('repos');

export default class Guard extends BaseResource {
  static attributes() {
    return [
      {
        name: 'id',
        type: 'Number',
        edit: false
      },
      {
        name: 'name',
        type: 'String',
        title: true,
        required: true
      },
      {
        name: 'path',
        type: 'String',
        title: true,
        required: true
      },
      {
        name: 'guardId',
        type: 'Number',
        associate: 'Guard',
        component: 'select',
        title: true,
        required: true,
        edit: false
      },
      {
        name: 'spaceId',
        type: 'Number',
        associate: 'Guard',
        component: 'select',
        title: true,
        required: true,
        edit: false
      },
      {
        name: 'createdAt',
        type: 'Date',
        edit: false
      },
      {
        name: 'updatedAt',
        type: 'Date',
        edit: false
      }
    ];
  }

  static api() {
    return crudAPI;
  }
}
