import {config, defaultStoreData} from '../../config';

// import {AComPC} from './gpu/acompc';
// import {Adorama} from './gpu/adorama';
// import {Akinformatica} from './gpu/akinformatica';
// import {Allneeds} from './gpu/allneeds';
// import {AlternateDe} from './gpu/alternate-de';
// import {AlternateFr} from './gpu/alternate-fr';
// import {AlternateNL} from './gpu/alternate-nl';
// import {Amazon} from './gpu/amazon';
// import {AmazonCa} from './gpu/amazon-ca';
// import {AmazonDe} from './gpu/amazon-de';
// import {AmazonDeWarehouse} from './gpu/amazon-de-warehouse';
// import {AmazonEs} from './gpu/amazon-es';
// import {AmazonFr} from './gpu/amazon-fr';
// import {AmazonIt} from './gpu/amazon-it';
// import {AmazonNl} from './gpu/amazon-nl';
// import {AmazonSg} from './gpu/amazon-sg';
// import {AmazonUk} from './gpu/amazon-uk';
// import {Amd} from './gpu/amd';
// import {AmdAt} from './gpu/amd-at';
// import {AmdBe} from './gpu/amd-be';
// import {AmdCa} from './gpu/amd-ca';
// import {AmdDe} from './gpu/amd-de';
// import {AmdIt} from './gpu/amd-it';
// import {AmdNl} from './gpu/amd-nl';
// import {AmdUk} from './gpu/amd-uk';
// import {AntOnline} from './gpu/antonline';
// import {AO} from './gpu/ao';
// import {Argos} from './gpu/argos';
// import {ArgosIE} from './gpu/argos-ie';
// import {Aria} from './gpu/aria';
// import {Arlt} from './gpu/arlt';
// import {Asus} from './gpu/asus';
// import {AsusDe} from './gpu/asus-de';
// import {AsusEs} from './gpu/asus-es';
// import {Awd} from './gpu/awd';
// import {Azerty} from './gpu/azerty';
// import {BAndH} from './gpu/bandh';
// import {BestBuy} from './gpu/bestbuy';
// import {BestBuyCa} from './gpu/bestbuy-ca';
// import {Box} from './gpu/box';
// import {Bpctech} from './gpu/bpctech';
// import {BpmPower} from './gpu/bpmpower';
// import {BT} from './gpu/bt';
// import {CanadaComputers} from './gpu/canadacomputers';
// import {Caseking} from './gpu/caseking';
// import {Ccl} from './gpu/ccl';
// import {Centrecom} from './gpu/centrecom';
// import {Comet} from './gpu/comet';
// import {ComputerAlliance} from './gpu/computeralliance';
// import {Computeruniverse} from './gpu/computeruniverse';
// import {Coolblue} from './gpu/coolblue';
// import {Coolmod} from './gpu/coolmod';
// import {Corsair} from './gpu/corsair';
// import {CorsairUK} from './gpu/corsair-uk';
// import {Cpl} from './gpu/cpl';
// import {Currys} from './gpu/currys';
// import {Cyberport} from './gpu/cyberport';
// import {CyberportAt} from './gpu/cyberport-at';
// import {Dcomp} from './gpu/dcomp';
// import {Drako} from './gpu/drako';
// import {DustinHomeNO} from './gpu/dustinhome-no';
// import {Ebuyer} from './gpu/ebuyer';
// import {Elcorteingles} from './gpu/elcorteingles';
// import {Eletronicamente} from './gpu/eletronicamente';
// import {Elkjop} from './gpu/elkjop';
// import {Eprice} from './gpu/eprice';
// import {Equippr} from './gpu/equippr';
// import {Euronics} from './gpu/euronics';
// import {EuronicsDE} from './gpu/euronics-de';
// import {Evatech} from './gpu/evatech';
// import {Evga} from './gpu/evga';
// import {EvgaEu} from './gpu/evga-eu';
// import {Expert} from './gpu/expert';
// import {Futurex} from './gpu/futurex';
// import {Galaxus} from './gpu/galaxus';
// import {Game} from './gpu/game';
// import {GameES} from './gpu/game-es';
// import {Gamestop} from './gpu/gamestop';
// import {GamestopCA} from './gpu/gamestop-ca';
// import {GamestopDE} from './gpu/gamestop-de';
// import {GamestopIE} from './gpu/gamestop-ie';
// import {GamestopIT} from './gpu/gamestop-it';
// import {Globaldata} from './gpu/globaldata';
// import {HardwarePlanet} from './gpu/hardware-planet';
// import {HarrisTechnology} from './gpu/harristechnology';
// import {HarveyNormanIE} from './gpu/harveynorman-ie';
// import {Igamecomputer} from './gpu/igame';
// import {JohnLewis} from './gpu/johnlewis';
// import {Kabum} from './gpu/kabum';
// import {KomplettNO} from './gpu/komplett-no';
// import {Ldlc} from './gpu/ldlc';
// import {LdlcEs} from './gpu/ldlc-es';
// import {LDLCItaly} from './gpu/ldlc-italy';
// import {LandmarkComputers} from './gpu/lmc';
// import {Materiel} from './gpu/materiel';
// import {Mediamarkt} from './gpu/mediamarkt';
// import {MediamarktAt} from './gpu/mediamarkt-at';
// import {Medimax} from './gpu/medimax';
// import {Megekko} from './gpu/megekko';
// import {MemoryExpress} from './gpu/memoryexpress';
// import {MicroCenter} from './gpu/microcenter';
// import {Microsoft} from './gpu/microsoft';
// import {MicrosoftCA} from './gpu/microsoft-ca';
// import {MightyApe} from './gpu/mightyape';
// import {Mindfactory} from './gpu/mindfactory';
// import {MSI} from './gpu/msi';
// import {Msy} from './gpu/msy';
// import {Multicom} from './gpu/multicom';
// import {Mwave} from './gpu/mwave';
// import {NeoByte} from './gpu/neobyte';
// import {NetonnetNO} from './gpu/netonnet-no';
// import {Newegg} from './gpu/newegg';
// import {NeweggCa} from './gpu/newegg-ca';
// import {NeweggSg} from './gpu/newegg-sg';
// import {NoelLeeming} from './gpu/noelleeming';
// import {Notebooksbilliger} from './gpu/notebooksbilliger';
// import {Novatech} from './gpu/novatech';
// import {NovoAtalho} from './gpu/novoatalho';
// import {NvidiaDE} from './gpu/nvidia-de';
// import {NvidiaES} from './gpu/nvidia-es';
// import {NvidiaFR} from './gpu/nvidia-fr';
// import {NvidiaGB} from './gpu/nvidia-gb';
// import {OfficeDepot} from './gpu/officedepot';
// import {Ollo} from './gpu/ollo';
// import {Opirata} from './gpu/opirata';
// import {Otto} from './gpu/otto';
// import {Overclockers} from './gpu/overclockers';
// import {PBTech} from './gpu/pbtech';
// import {PCByte} from './gpu/pcbyte';
// import {Pccg} from './gpu/pccg';
// import {PCComponentes} from './gpu/pccomponentes';
// import {PCDiga} from './gpu/pcdiga';
// import {PCKing} from './gpu/pcking';
// import {PlayStation} from './gpu/playstation';
// import {Pny} from './gpu/pny';
// import {PowerNO} from './gpu/power-no';
// import {ProshopDE} from './gpu/proshop-de';
// import {ProshopDK} from './gpu/proshop-dk';
// import {ProshopNO} from './gpu/proshop-no';
// import {Rosman} from './gpu/rosman';
// import {RosmanMelb} from './gpu/rosman-melb';
// import {Saturn} from './gpu/saturn';
// import {SaveOnIt} from './gpu/saveonit';
// import {Scan} from './gpu/scan';
// import {Scorptec} from './gpu/scorptec';
// import {ShopTo} from './gpu/shopto';
// import {Siabyte} from './gpu/siabyte';
// import {SmythsToys} from './gpu/smythstoys';
// import {SmythsToysIE} from './gpu/smythstoys-ie';
// import {Spielegrotte} from './gpu/spielegrotte';
// import {StormComputers} from './gpu/storm';
// import {Target} from './gpu/target';
// import {TescoIE} from './gpu/tesco-ie';
// import {TheWarehouse} from './gpu/thewarehouse';
// import {TopAchat} from './gpu/topachat';
// import {ToysRUs} from './gpu/toysrus';
// import {Ubiquiti} from './gpu/ubiquiti';
// import {Umart} from './gpu/umart';
// import {Unieuro} from './gpu/unieuro';
// import {UltimaInformatica} from './gpu/utlimainformatica';
// import {Very} from './gpu/very';
// import {VsGamers} from './gpu/vsgamers';
// import {Vuugo} from './gpu/vuugo';
// import {Walmart} from './gpu/walmart';
// import {WalmartCa} from './gpu/walmart-ca';
// import {WellsTechnology} from './gpu/wellstechnology';
// import {Wipoid} from './gpu/wipoid';
// import {Xbox} from './gpu/xbox';
// import {XtremMedia} from './gpu/xtremmedia';
// import {Zotac} from './gpu/zotac';

import {Store} from './store';
import {PokemonCenter} from './pokemon/pokemon-center';
import {Target} from './pokemon/target';
import {Walmart} from './pokemon/walmart';

import chalk from 'chalk';
import {logger} from '../../logger';

export const storeList = new Map([
  [PokemonCenter.name, PokemonCenter],
  [Target.name, Target],
  [Walmart.name, Walmart],

  // [AComPC.name, AComPC],
  // [Adorama.name, Adorama],
  // [Akinformatica.name, Akinformatica],
  // [Allneeds.name, Allneeds],
  // [AlternateDe.name, AlternateDe],
  // [AlternateFr.name, AlternateFr],
  // [AlternateNL.name, AlternateNL],
  // [Amazon.name, Amazon],
  // [AmazonCa.name, AmazonCa],
  // [AmazonDe.name, AmazonDe],
  // [AmazonDeWarehouse.name, AmazonDeWarehouse],
  // [AmazonEs.name, AmazonEs],
  // [AmazonFr.name, AmazonFr],
  // [AmazonIt.name, AmazonIt],
  // [AmazonNl.name, AmazonNl],
  // [AmazonSg.name, AmazonSg],
  // [AmazonUk.name, AmazonUk],
  // [Amd.name, Amd],
  // [AmdAt.name, AmdAt],
  // [AmdBe.name, AmdBe],
  // [AmdCa.name, AmdCa],
  // [AmdDe.name, AmdDe],
  // [AmdIt.name, AmdIt],
  // [AmdNl.name, AmdNl],
  // [AmdUk.name, AmdUk],
  // [AntOnline.name, AntOnline],
  // [AO.name, AO],
  // [Argos.name, Argos],
  // [ArgosIE.name, Argos],
  // [Aria.name, Aria],
  // [Arlt.name, Arlt],
  // [Asus.name, Asus],
  // [AsusDe.name, AsusDe],
  // [AsusEs.name, AsusEs],
  // [Awd.name, Awd],
  // [Azerty.name, Azerty],
  // [BAndH.name, BAndH],
  // [BestBuy.name, BestBuy],
  // [BestBuyCa.name, BestBuyCa],
  // [Box.name, Box],
  // [Bpctech.name, Bpctech],
  // [BpmPower.name, BpmPower],
  // [BT.name, BT],
  // [CanadaComputers.name, CanadaComputers],
  // [Caseking.name, Caseking],
  // [Ccl.name, Ccl],
  // [Centrecom.name, Centrecom],
  // [Comet.name, Comet],
  // [ComputerAlliance.name, ComputerAlliance],
  // [Computeruniverse.name, Computeruniverse],
  // [Coolblue.name, Coolblue],
  // [Coolmod.name, Coolmod],
  // [Corsair.name, Corsair],
  // [CorsairUK.name, CorsairUK],
  // [Cpl.name, Cpl],
  // [Currys.name, Currys],
  // [Cyberport.name, Cyberport],
  // [CyberportAt.name, CyberportAt],
  // [Dcomp.name, Dcomp],
  // [Drako.name, Drako],
  // [DustinHomeNO.name, DustinHomeNO],
  // [Ebuyer.name, Ebuyer],
  // [Elcorteingles.name, Elcorteingles],
  // [Eletronicamente.name, Eletronicamente],
  // [Elkjop.name, Elkjop],
  // [Eprice.name, Eprice],
  // [Equippr.name, Equippr],
  // [Euronics.name, Euronics],
  // [EuronicsDE.name, EuronicsDE],
  // [Evatech.name, Evatech],
  // [Evga.name, Evga],
  // [EvgaEu.name, EvgaEu],
  // [Expert.name, Expert],
  // [Futurex.name, Futurex],
  // [Galaxus.name, Galaxus],
  // [Game.name, Game],
  // [GameES.name, GameES],
  // [Gamestop.name, Gamestop],
  // [GamestopCA.name, GamestopCA],
  // [GamestopDE.name, GamestopDE],
  // [GamestopIE.name, GamestopIE],
  // [GamestopIT.name, GamestopIT],
  // [Globaldata.name, Globaldata],
  // [HardwarePlanet.name, HardwarePlanet],
  // [HarrisTechnology.name, HarrisTechnology],
  // [HarveyNormanIE.name, HarveyNormanIE],
  // [Igamecomputer.name, Igamecomputer],
  // [JohnLewis.name, JohnLewis],
  // [Kabum.name, Kabum],
  // [KomplettNO.name, KomplettNO],
  // [LandmarkComputers.name, LandmarkComputers],
  // [Ldlc.name, Ldlc],
  // [LdlcEs.name, LdlcEs],
  // [LDLCItaly.name, LDLCItaly],
  // [Materiel.name, Materiel],
  // [Mediamarkt.name, Mediamarkt],
  // [MediamarktAt.name, MediamarktAt],
  // [Medimax.name, Medimax],
  // [Megekko.name, Megekko],
  // [MemoryExpress.name, MemoryExpress],
  // [MicroCenter.name, MicroCenter],
  // [Microsoft.name, Microsoft],
  // [MicrosoftCA.name, MicrosoftCA],
  // [MightyApe.name, MightyApe],
  // [Mindfactory.name, Mindfactory],
  // [MSI.name, MSI],
  // [Msy.name, Msy],
  // [Multicom.name, Multicom],
  // [Mwave.name, Mwave],
  // [NeoByte.name, NeoByte],
  // [NetonnetNO.name, NetonnetNO],
  // [Newegg.name, Newegg],
  // [NeweggCa.name, NeweggCa],
  // [NeweggSg.name, NeweggSg],
  // [NoelLeeming.name, NoelLeeming],
  // [Notebooksbilliger.name, Notebooksbilliger],
  // [Novatech.name, Novatech],
  // [NovoAtalho.name, NovoAtalho],
  // [NvidiaDE.name, NvidiaDE],
  // [NvidiaES.name, NvidiaES],
  // [NvidiaFR.name, NvidiaFR],
  // [NvidiaGB.name, NvidiaGB],
  // [OfficeDepot.name, OfficeDepot],
  // [Ollo.name, Ollo],
  // [Opirata.name, Opirata],
  // [Otto.name, Otto],
  // [Overclockers.name, Overclockers],
  // [PBTech.name, PBTech],
  // [PCByte.name, PCByte],
  // [Pccg.name, Pccg],
  // [PCComponentes.name, PCComponentes],
  // [PCDiga.name, PCDiga],
  // [PCKing.name, PCKing],
  // [PlayStation.name, PlayStation],
  // [Pny.name, Pny],
  // [PowerNO.name, PowerNO],
  // [ProshopDE.name, ProshopDE],
  // [ProshopDK.name, ProshopDK],
  // [ProshopNO.name, ProshopNO],
  // [Rosman.name, Rosman],
  // [RosmanMelb.name, RosmanMelb],
  // [Saturn.name, Saturn],
  // [SaveOnIt.name, SaveOnIt],
  // [Scan.name, Scan],
  // [Scorptec.name, Scorptec],
  // [ShopTo.name, ShopTo],
  // [Siabyte.name, Siabyte],
  // [SmythsToys.name, SmythsToys],
  // [SmythsToysIE.name, SmythsToysIE],
  // [Spielegrotte.name, Spielegrotte],
  // [StormComputers.name, StormComputers],
  // [Target.name, Target],
  // [TescoIE.name, TescoIE],
  // [TheWarehouse.name, TheWarehouse],
  // [TopAchat.name, TopAchat],
  // [ToysRUs.name, ToysRUs],
  // [Ubiquiti.name, Ubiquiti],
  // [UltimaInformatica.name, UltimaInformatica],
  // [Umart.name, Umart],
  // [Unieuro.name, Unieuro],
  // [Very.name, Very],
  // [VsGamers.name, VsGamers],
  // [Vuugo.name, Vuugo],
  // [Walmart.name, Walmart],
  // [WalmartCa.name, WalmartCa],
  // [WellsTechnology.name, WellsTechnology],
  // [Wipoid.name, Wipoid],
  // [Xbox.name, Xbox],
  // [XtremMedia.name, XtremMedia],
  // [Zotac.name, Zotac],
]);

const brands = new Set();
const models = new Set();
const series = new Set();
const stores = new Map();

function filterBrandsSeriesModels() {
  brands.clear();
  series.clear();
  models.clear();

  for (const store of storeList.values()) {
    for (const link of store.links) {
      brands.add(link.brand);
      series.add(link.series);
      models.add(link.model);
    }

    if (store.minPageSleep === undefined) {
      store.minPageSleep = defaultStoreData.minPageSleep;
    }

    if (store.maxPageSleep === undefined) {
      store.maxPageSleep = defaultStoreData.maxPageSleep;
    }
  }
}

function printConfig() {
  if (config.store.showOnlyBrands.length > 0) {
    logger.info(`ℹ selected brands: ${config.store.showOnlyBrands.join(', ')}`);
  }

  if (config.store.showOnlyModels.length > 0) {
    logger.info(
      `ℹ selected models: ${config.store.showOnlyModels
        .map(entry => {
          return entry.series
            ? entry.name + ' (' + entry.series + ')'
            : entry.name;
        })
        .join(', ')}`
    );
  }

  if (config.store.showOnlySeries.length > 0) {
    logger.info(`ℹ selected series: ${config.store.showOnlySeries.join(', ')}`);
  }

  if (config.store.stores.length > 0) {
    const stores = darkenEmptyStores();
    logger.info(`ℹ selected stores: ${stores.names.join(', ')}`);

    if (stores.anyExcluded) {
      logger.warn(
        'ℹ some of the selected stores (grayed out) dont have what you are looking for'
      );
    }
  }
}

function darkenEmptyStores(): {names: string[]; anyExcluded: boolean} {
  let anyExcluded = false;
  const selectedStores = config.store.stores.map(store => store.name);

  const names = selectedStores.map(selected => {
    const storeConfig = storeList.get(selected);
    const hasAny =
      storeConfig?.links.some(
        l =>
          (config.store.showOnlySeries?.includes(l.series) ?? false) ||
          config.store.showOnlyBrands?.includes(l.brand ?? false) ||
          (config.store.showOnlyModels?.map(m => m.name).includes(l.model) ??
            false)
      ) ?? false;

    anyExcluded = anyExcluded || !hasAny;
    return hasAny ? selected : chalk.gray(selected);
  });
  return {names, anyExcluded};
}

function warnIfStoreDeprecated(store: Store) {
  switch (store.name) {
    case 'evga':
      logger.warn(
        `${store.name} is deprecated since they only support queuing`
      );
      break;
    default:
  }
}

export function updateStores() {
  stores.clear();

  for (const storeData of config.store.stores) {
    const store = storeList.get(storeData.name);

    if (store) {
      warnIfStoreDeprecated(store);
      stores.set(storeData.name, store);
      store.minPageSleep = storeData.minPageSleep;
      store.maxPageSleep = storeData.maxPageSleep;
      store.proxyList = storeData.proxyList;
    } else {
      logger.warn(`No store named ${storeData.name}, skipping.`);
    }
  }

  filterBrandsSeriesModels();
  printConfig();
}

updateStores();

export function getAllBrands() {
  return [...brands];
}

export function getAllSeries() {
  return [...series];
}

export function getAllModels() {
  return [...models];
}

export function getAllCountries() {
  return Array.from(
    new Set(
      [...storeList].map(storeInfo => storeInfo[1]).map(store => store.country)
    )
  ).sort();
}

export function getStores() {
  return stores;
}

export * from './store';
