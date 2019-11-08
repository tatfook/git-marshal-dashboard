import { resourceCRUD } from '@/api/resources';
import BaseResource from './base';

const crudAPI = resourceCRUD('spaces');

export default class Space extends BaseResource {
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
        name: 'userId',
        type: 'number',
        title: true,
        required: true
      },
      {
        name: 'repoCount',
        type: 'number',
        title: true,
        required: true
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
