let visit = [];
let id = 0;

module.export = {
  create: (req, res) => {
    const {name, phone_num, email} = req.body;
    visit.push({id, name, phone_num, email});
    id++;
    res.status(200).send(visit);
  },

  read:(req, res) => {
  res.status(200).send(visit);
  },

  update: ( req, res ) => {
  const updateID = req.params.id;
  let index = visit.findIndex( visit => visit.id == updateID);


  visit[ index ] = {
    id: visit[ index ].id,
    name: req.body.name || visit[ index ].name,
    phone_num: req.body.phone_num || visit[ index ].phone_num,
    email: req.body.phone_num || visit[ index ].email
  };

  res.status(200).send( visit );
  },

  delete: ( req, res ) => {
  const deleteID = req.params.id;
  visitID = visit.findIndex( visit => visit.id == deleteID );
  visit.splice( visitID, 1 );
  res.status(200).send( visit );
  }
}
