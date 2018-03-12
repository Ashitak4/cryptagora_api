'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PoolSchema = new Schema({
    crypto : {
      properties : {
        name : {
          type  :  String,
        },
        symbol  : {
          type  :  String,
          uniqueItems  : true
        },
        logo : {
          type : String,
          url  : 'PathToImage'
        },
        desc : {
          type : String
        }
      }
    },
    value : {
      properties : {
        time : {
          type : Date,
          default: Date.now
        },
        value : {
          type : Number
        }
      }
    },
    hashrate : {
      properties : {
        time : {
          type : Date,
          default: Date.now
        },
        value : {
          type : Number
        }
      }
    },
    block : {
      properties : {
        coin : {
          type : Number,
          description : 'nombre de coins par block'
        },
        blockmine : {
          properties : {
            time : {
              type : Date,
              default: Date.now
            },
            tag : {
              type : Number
            }
          }
        },
        algo : {
          type : String
        }
      }
    },
    remuneration : {
      properties : {
        algo : {
          type : String
        }, taxe : {
          type : Number
        },
        minimum : {
          type : Number
        }
      }
    },
    user : {
      type : Array,
      properties : {
        wallet : {
          type : String
        },
        balance : {
          properties : {
            totale : {
              type : Number
            },
            actuelle : {
              type : Number
            },
            unconfirmed : {
              type : Number
            },
            payed : {
              type : Number
            }
          }
        },
        creationtime : {
          type : Date,
          default: Date.now
        },
        autopayoutmin : {
          type : Number
        },
        balancetransaction : {
          properties : {
            date : {
              type : Date,
              default: Date.now
            },
            value : {
              type : Number
            }
          }
        },
        worker : {
          properties : {
            id : {
              type : Number
            },
            puissance : {
              properties : {
                date : {
                  type : Date,
                  default: Date.now
                },
                value : {
                  type : Number
                }
              }
            }
          }
        }
      }
    }
});

module.exports = mongoose.model('Data', PoolSchema);
