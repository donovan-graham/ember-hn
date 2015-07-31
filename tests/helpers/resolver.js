import Resolver from 'ember/resolver';
import ENV from '../../config/environment';

var resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: ENV.modulePrefix,
  podModulePrefix: ENV.podModulePrefix
};

export default resolver;
