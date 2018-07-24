export interface IConsign {
     ConsignId  // ConsignId (Primary key)
      Id  // Id
      EntryDate  // EntryDate
      UserName  // UserName
      TxnDate  // TxnDate
      ConsignType  // ConsignType
      Station1Id  // Station1Id
      Station1  // Station1
      Station2Id  // Station2Id
      Station2  // Station2
}

export class Consign implements IConsign {
      ConsignId  // ConsignId (Primary key)
      Id  // Id
      EntryDate  // EntryDate
      UserName  = 'chia' // UserName
      TxnDate  // TxnDate
      ConsignType = 1  // ConsignType
      Station1Id =1  // Station1Id
      Station1 ='x' // Station1
      Station2Id  =2// Station2Id
      Station2 = 'y' // Station2

}

