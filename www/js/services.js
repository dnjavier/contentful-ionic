angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Tests', function() {
  var contentfulClient = contentful.createClient({
    accessToken: '1f008e04459e004fae16e2eee33a2d42f17f7adf186d9f2e4030f676d07c024c',
    space: 'pyv6rtk7f6v3'
  });

  return {
    all: function(content_type) {
      return contentfulClient.getEntries({
        content_type: content_type
      });
    },
    get: function(entryId) {
      return contentfulClient.getEntry(entryId);
    },
    getAsset: function(assetId) {
      return contentfulClient.getAsset(assetId);
    },
  };
});
