// The ActiveModelAdapter is a subclass of the RESTAdapter designed to integrate with a JSON API 
// that uses an underscored naming convention instead of camelCasing.

// It has been designed to work out of the box with the active_model_serializers Ruby gem. 

import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend();