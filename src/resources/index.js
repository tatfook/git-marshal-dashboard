import _ from 'lodash';
import Role from './role';
import Admin from './admin';
import Guard from './guard';
import Space from './space';
import Repo from './repo';

export const resources = {
  Role,
  Admin,
  Guard,
  Space,
  Repo
};

export const newResource = (name, row) => {
  const Klass = resources[_.upperFirst(name)];
  if (!Klass) throw new Error('Invlid resource: ' + _.upperFirst(name));
  return new Klass(row);
};

export const getResourceClass = name => {
  return resources[_.upperFirst(name)];
};

export default {
  resources,
  newResource,
  getResourceClass
};
