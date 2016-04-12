// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"removeNode","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key_","type":"bytes32"}],"name":"createNode","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_key","type":"bytes32"}],"name":"getNode","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_factoryAddress","type":"address"}],"name":"registerFactory","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"nodeFactory","outputs":[{"name":"","type":"address"}],"type":"function"}],
    binary: "6060604052610dcd806100126000396000f3606060405260e060020a600035046316c5882481146100475780631cd23fd9146100a857806350c946fe14610131578063783ff1f11461019b578063d93fe9c4146101c1575b005b610045600435600080547f16c588240000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116916316c58824916084919060248183876161da5a03f1156100025750505050565b61004560043560006060610bdd806101f0833901809050604051809103906000f08154604080517f1cd23fd90000000000000000000000000000000000000000000000000000000081526004810186905290519293600160a060020a0390921692631cd23fd992602483810193919291829003018183876161da5a03f115610002575050505050565b6101d3600435600080547f50c946fe0000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116906350c946fe9060849060209060248187876161da5a03f115610002575050604051519392505050565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610045565b6101d3600054600160a060020a031681565b60408051600160a060020a03929092168252519081900360200190f36060604052610bcb806100126000396000f3606060405236156100825760e060020a60003504630178fe3f811461008457806306661abd1461013f57806315e82366146101555780632123825f1461016657806375b9b3571461019b5780638c59091714610256578063c095bdc5146102a3578063d5924158146102db578063f0ba844014610394578063fc62451a1461040d575b005b610445600435604080516020818101835260008083528351918201909352828152825491929091819081908190879081101561000257906000526020600020906004020160005060038101546002828101548354604080516020600184811615610100026000190190941695909504601f810186900486028201860190925281815295965086959186019460ff9390931693869190830182828015610a615780601f10610a3657610100808354040283529160200191610a61565b6000545b60408051918252519081900360200190f35b61014360043560005481105b919050565b610143600435600060006000508281548110156100025750508052600080516020610bab833981519152600482020154610161565b60408051602060248035600481810135601f81018590048502860185019096528585526100829581359591946044949293909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a01909352828252969897606497919650602491909101945090925082915084018382808284375094965050505050505060008054849081101561000257508052600080516020610b8b83398151915260048402015460ff16156108cb57610002565b61008260043560243560008054839081101561000257508054818052600080516020610bab83398151915260048502015491839185908110156100025750505080820111610b0657610002565b610143600435600060006000508281548110156100025750508052600080516020610b8b83398151915260048202015460ff16610161565b6040805160206004803580820135601f8101849004840285018401909552848452610082949193602493909291840191908190840183828082843750506040805160208835808b0135601f8101839004830284018301909452838352979998604498929750919091019450909250829150840183828082843750949650505050505050600080546001810180835582908280158290116106345760040281600402836000526020600020918201910161063491906106ff565b61052060043560008054829081101561000257508052600402600080516020610b8b833981519152810154600080516020610bab833981519152820154600080516020610b6b8339815191528301927f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564019160ff169084565b61008260043560008054829081101561000257508052600080516020610b8b83398151915260048202015460ff161561089657610002565b6040518080602001806020018581526020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104b55780820380516001836020036101000a031916815260200191505b508381038252868181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561050e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b604080519081018390526060810182905260808082528554600260018216156101000260001901909116049082018190528190602082019060a0830190889080156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b5050838103825286546002600182161561010002600019019091160480825260209190910190879080156106215780601f106105f657610100808354040283529160200191610621565b820191906000526020600020905b81548152906001019060200180831161060457829003601f168201915b5050965050505050505060405180910390f35b50505090506080604051908101604052808481526020018381526020016000815260200160008152602001506000600050828154811015610002575080805260048302600080516020610b6b8339815191520190506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107ae57805160ff19168380011785555b506107de929150610778565b505060028101805460ff19169055600060038201556001015b8082111561078c57600060008201600050805460018160011615610100020316600290046000825580601f1061075e57505b5060018201600050805460018160011615610100020316600290046000825580601f1061079057506106e6565b601f01602090049060005260206000209081019061073191905b8082111561078c5760008155600101610778565b5090565b601f0160209004906000526020600020908101906106e69190610778565b828001600101855582156106da579182015b828111156106da5782518260005055916020019190600101906107c0565b50506020820151816001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061083d57805160ff19168380011785555b5061086d929150610778565b82800160010185558215610831579182015b8281111561083157825182600050559160200191906001019061084f565b5050604082015160028201805460ff191690911790556060919091015160039190910155505050565b6001600060005082815481101561000257908052600402600080516020610b8b83398151915201805460ff1916909117905550565b816000600050848154811015610002575080805260048502600080516020610b6b8339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061094c57805160ff19168380011785555b5061097c929150610778565b82800160010185558215610940579182015b8281111561094057825182600050559160200191906001019061095e565b5050806000600050848154811015610002575080805260048502600080516020610b6b8339815191520190506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109ff57805160ff19168380011785555b50610a2f929150610778565b828001600101855582156109f3579182015b828111156109f3578251826000505591602001919060010190610a11565b5050505050565b820191906000526020600020905b815481529060010190602001808311610a4457829003601f168201915b5050865460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815295995088945092508401905082828015610aef5780601f10610ac457610100808354040283529160200191610aef565b820191906000526020600020905b815481529060010190602001808311610ad257829003601f168201915b505050505092509450945094509450509193509193565b6000805483908110156100025750805260048202600080516020610b8b833981519152015460ff1615610b3857610002565b8060006000508381548110156100025750805250600491909102600080516020610bab833981519152018054909101905556290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e566",
    unlinked_binary: "6060604052610dcd806100126000396000f3606060405260e060020a600035046316c5882481146100475780631cd23fd9146100a857806350c946fe14610131578063783ff1f11461019b578063d93fe9c4146101c1575b005b610045600435600080547f16c588240000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116916316c58824916084919060248183876161da5a03f1156100025750505050565b61004560043560006060610bdd806101f0833901809050604051809103906000f08154604080517f1cd23fd90000000000000000000000000000000000000000000000000000000081526004810186905290519293600160a060020a0390921692631cd23fd992602483810193919291829003018183876161da5a03f115610002575050505050565b6101d3600435600080547f50c946fe0000000000000000000000000000000000000000000000000000000060609081526064849052600160a060020a03909116906350c946fe9060849060209060248187876161da5a03f115610002575050604051519392505050565b6000805473ffffffffffffffffffffffffffffffffffffffff1916600435179055610045565b6101d3600054600160a060020a031681565b60408051600160a060020a03929092168252519081900360200190f36060604052610bcb806100126000396000f3606060405236156100825760e060020a60003504630178fe3f811461008457806306661abd1461013f57806315e82366146101555780632123825f1461016657806375b9b3571461019b5780638c59091714610256578063c095bdc5146102a3578063d5924158146102db578063f0ba844014610394578063fc62451a1461040d575b005b610445600435604080516020818101835260008083528351918201909352828152825491929091819081908190879081101561000257906000526020600020906004020160005060038101546002828101548354604080516020600184811615610100026000190190941695909504601f810186900486028201860190925281815295965086959186019460ff9390931693869190830182828015610a615780601f10610a3657610100808354040283529160200191610a61565b6000545b60408051918252519081900360200190f35b61014360043560005481105b919050565b610143600435600060006000508281548110156100025750508052600080516020610bab833981519152600482020154610161565b60408051602060248035600481810135601f81018590048502860185019096528585526100829581359591946044949293909201918190840183828082843750506040805160209735808a0135601f81018a90048a0283018a01909352828252969897606497919650602491909101945090925082915084018382808284375094965050505050505060008054849081101561000257508052600080516020610b8b83398151915260048402015460ff16156108cb57610002565b61008260043560243560008054839081101561000257508054818052600080516020610bab83398151915260048502015491839185908110156100025750505080820111610b0657610002565b610143600435600060006000508281548110156100025750508052600080516020610b8b83398151915260048202015460ff16610161565b6040805160206004803580820135601f8101849004840285018401909552848452610082949193602493909291840191908190840183828082843750506040805160208835808b0135601f8101839004830284018301909452838352979998604498929750919091019450909250829150840183828082843750949650505050505050600080546001810180835582908280158290116106345760040281600402836000526020600020918201910161063491906106ff565b61052060043560008054829081101561000257508052600402600080516020610b8b833981519152810154600080516020610bab833981519152820154600080516020610b6b8339815191528301927f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564019160ff169084565b61008260043560008054829081101561000257508052600080516020610b8b83398151915260048202015460ff161561089657610002565b6040518080602001806020018581526020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104b55780820380516001836020036101000a031916815260200191505b508381038252868181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561050e5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b604080519081018390526060810182905260808082528554600260018216156101000260001901909116049082018190528190602082019060a0830190889080156105ac5780601f10610581576101008083540402835291602001916105ac565b820191906000526020600020905b81548152906001019060200180831161058f57829003601f168201915b5050838103825286546002600182161561010002600019019091160480825260209190910190879080156106215780601f106105f657610100808354040283529160200191610621565b820191906000526020600020905b81548152906001019060200180831161060457829003601f168201915b5050965050505050505060405180910390f35b50505090506080604051908101604052808481526020018381526020016000815260200160008152602001506000600050828154811015610002575080805260048302600080516020610b6b8339815191520190506000820151816000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107ae57805160ff19168380011785555b506107de929150610778565b505060028101805460ff19169055600060038201556001015b8082111561078c57600060008201600050805460018160011615610100020316600290046000825580601f1061075e57505b5060018201600050805460018160011615610100020316600290046000825580601f1061079057506106e6565b601f01602090049060005260206000209081019061073191905b8082111561078c5760008155600101610778565b5090565b601f0160209004906000526020600020908101906106e69190610778565b828001600101855582156106da579182015b828111156106da5782518260005055916020019190600101906107c0565b50506020820151816001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061083d57805160ff19168380011785555b5061086d929150610778565b82800160010185558215610831579182015b8281111561083157825182600050559160200191906001019061084f565b5050604082015160028201805460ff191690911790556060919091015160039190910155505050565b6001600060005082815481101561000257908052600402600080516020610b8b83398151915201805460ff1916909117905550565b816000600050848154811015610002575080805260048502600080516020610b6b8339815191520190506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061094c57805160ff19168380011785555b5061097c929150610778565b82800160010185558215610940579182015b8281111561094057825182600050559160200191906001019061095e565b5050806000600050848154811015610002575080805260048502600080516020610b6b8339815191520190506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106109ff57805160ff19168380011785555b50610a2f929150610778565b828001600101855582156109f3579182015b828111156109f3578251826000505591602001919060010190610a11565b5050505050565b820191906000526020600020905b815481529060010190602001808311610a4457829003601f168201915b5050865460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815295995088945092508401905082828015610aef5780601f10610ac457610100808354040283529160200191610aef565b820191906000526020600020905b815481529060010190602001808311610ad257829003601f168201915b505050505092509450945094509450509193509193565b6000805483908110156100025750805260048202600080516020610b8b833981519152015460ff1615610b3857610002565b8060006000508381548110156100025750805250600491909102600080516020610bab833981519152018054909101905556290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e565290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e566",
    address: "0xfcac0884d9c26a890773bba697779a17772447d1",
    generated_with: "2.0.6",
    contract_name: "ExpensiveParent"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ExpensiveParent error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExpensiveParent error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExpensiveParent error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExpensiveParent error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ExpensiveParent = Contract;
  }

})();