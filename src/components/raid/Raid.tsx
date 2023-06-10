'use client'
import * as React from 'react'
import styles from './Raid.module.css'
import * as Tabs from '@radix-ui/react-tabs'
import { ContentSection } from './ContentSection'

interface Props {
  selectedRaid: string
}

const raidSample = {
  title: 'Last Wish',
  intro:
    "Cat ipsum dolor sit amet, sniff other cat's butt and hang jaw half open thereafter for attack curtains, or i like frogs and 0 gravity dead stare with ears cocked. One of these days i'm going to get that red dot, just you wait and see meow to be let in. Thug cat love fish. Why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout chew master's slippers, cat not kitten around find something else more interesting thug cat . Bleghbleghvomit my furball really tie the room together love morning beauty routine of licking self so cats woo for loved it, hated it, loved it, hated it so stuff and things or throw down all the stuff in the kitchen. Sit on human. Sun bathe meow to be let in and i is not fat, i is fluffy that box? i can fit in that box.",
  lootTable: {
    imgSource: 'this should be a photo',
    text: 'In Last Wish there is no set loot for encounters. All loot can drop from any chest throughout the raid.',
  },
  encounters: [
    {
      title: 'Kalli',
      summary:
        'this is a very long encounter summary. \nDoggo ipsum snoot doggo. Pats the neighborhood pupper long doggo waggy wags boof, pats you are doing me a frighten. The neighborhood pupper what a nice floof you are doing me the shock doge wow such tempt length boy boof, most angery pupper I have ever seen I am bekom fat noodle horse clouds heckin. dat tungg tho aqua doggo. H*ck noodle horse snoot fluffer aqua doggo heckin good boys and girls, shibe h*ck maximum borkdrive. Many pats much ruin diet corgo very hand that feed shibe wrinkler, pats many pats. Floofs wrinkler stop it fren many pats, maximum borkdrive. Big ol pupper smol borking doggo with a long snoot for pats borkf noodle horse many pats what a nice floof wow very biscit puggo pupper very hand that feed shibe, shoob fluffer puggorino smol borking doggo with a long snoot for pats pats stop it fren you are doing me a frighten. Bork big ol very taste wow long bois what a nice floof, long bois shibe borkdrive.\nBlop heckin good boys you are doing me the shock the neighborhood pupper corgo, pupper smol heck, doge borking doggo heckin good boys and girls. Maximum borkdrive dat tungg tho the neighborhood pupper lotsa pats, super chub. Very good spot doggo long bois shoob, pupper h*ck. Very good spot long bois pats, smol. Long doggo long bois wow very biscit, borking doggo. Pupperino shoober borkdrive corgo, borkf long water shoob. Puggorino borking doggo super chub bork very hand that feed shibe borkdrive, puggo doing me a frighten h*ck. You are doin me a concern I am bekom fat doggorino corgo, long bois blop, sub woofer snoot. You are doin me a concern many pats adorable doggo smol you are doin me a concern, maximum borkdrive long woofer mlem long doggo you are doin me a concern, I am bekom fat h*ck heck.  Borkf heckin yapper h*ck what a nice floof, aqua doggo borkf. Long bois shoob aqua doggo fluffer shibe, vvv blep boof heckin angery woofer, noodle horse many pats lotsa pats.\nFluffer very taste wow mlem shoober, noodle horse you are doing me the shock. Adorable doggo I am bekom fat blep sub woofer you are doing me the shock big ol, noodle horse big ol pupper heckin. H*ck mlem you are doing me a frighten adorable doggo shoober much ruin diet, long woofer you are doin me a concern porgo.  Doge wow such tempt long woofer shooberino borking doggo, h*ck super chub. Pupper lotsa pats stop it fren very hand that feed shibe, blop. Vvv big ol pupper corgo what a nice floof smol borking doggo with a long snoot for pats, extremely cuuuuuute doggo wow such tempt.',
      imgSource: 'this is an image source',
    },
    {
      title: 'Shuro Chi',
      summary:
        'this is a very long encounter summary. \nDoggo ipsum noodle horse heckin doggo big ol, heck floofs. Big ol pupper wow very biscit vvv super chub, mlem dat tungg tho. Much ruin diet heckin good boys and girls aqua doggo h*ck doge pats fat boi, bork such treat long woofer he made many woofs long water shoob. Bork heckin good boys heckin angery woofer puggorino lotsa pats wrinkler shoober doge, borkdrive borkf the neighborhood pupper such treat I am bekom fat the neighborhood pupper. Very taste wow adorable doggo aqua doggo fat boi waggy wags heckin good boys and girls, you are doin me a concern shooberino blep. Adorable doggo porgo big ol pupper extremely cuuuuuute, most angery pupper I have ever seen you are doin me a concern. Very taste wow wow very biscit much ruin diet smol borking doggo with a long snoot for pats, heckin angery woofer you are doin me a concern boofers, blop dat tungg tho. Big ol blep fluffer shoober, blop. Smol borking doggo with a long snoot for pats thicc lotsa pats wow very biscit fluffer, big ol heckin good boys much ruin diet.\nSuch treat doggo smol mlem long bois, pats shoob pats. Very good spot heckin angery woofer shoober, shooberino. The neighborhood pupper borkdrive boofers wrinkler lotsa pats, fluffer very good spot. Smol super chub boof shooberino clouds, wow very biscit borking doggo bork. Snoot shoober doggorino sub woofer, big ol pupper very good spot. Length boy long bois long doggo you are doing me the shock much ruin diet such treat, very good spot you are doing me the shock such treat. Heckin good boys borking doggo pupper long woofer stop it fren bork, puggorino heckin woofer pats. Mlem very taste wow heckin good boys you are doing me the shock I am bekom fat the neighborhood pupper, lotsa pats I am bekom fat stop it fren woofer, long woofer very good spot smol he made many woofs. Puggo mlem puggorino thicc shooberino, smol borking doggo with a long snoot for pats doing me a frighten ur givin me a spook. Long water shoob vvv long woofer heckin angery woofer long doggo shoober doggorino, ruff borkdrive I am bekom fat yapper.\nShooberino snoot maximum borkdrive wow very biscit puggorino floofs, smol ur givin me a spook blop shoober. Clouds lotsa pats such treat tungg heckin angery woofer doggorino doggo you are doing me a frighten pupper, big ol most angery pupper I have ever seen you are doing me the shock heckin good boys shoober puggo very jealous pupper. Mlem dat tungg tho borking doggo you are doing me the shock heckin good boys, wow very biscit vvv h*ck. Borkdrive blop yapper puggorino mlem, super chub yapper.',
      imgSource: 'this is an image source',
    },
    {
      title: 'Morgeth',
      summary:
        'this is a very long encounter summary. \nDoggo ipsum i am bekom fat yapper boofers shooberino you are doing me a frighten tungg heckin, very hand that feed shibe shoob puggorino doing me a frighten much ruin diet. Length boy wrinkler length boy you are doin me a concern extremely cuuuuuute, doge snoot you are doin me a concern. Heckin good boys and girls heckin angery woofer length boy, fluffer. doggo. Puggorino tungg very taste wow vvv snoot I am bekom fat heckin angery woofer boofers yapper, thicc fluffer borkf you are doin me a concern very jealous pupper you are doing me the shock. Heckin good boys shoob ur givin me a spook many pats dat tungg tho, doing me a frighten pats.  Doing me a frighten corgo much ruin diet blep, borkf corgo. maximum borkdrive you are doing me the shock thicc. wrinkler snoot pupperino. Fluffer doge thicc you are doing me the shock, fluffer.\nHeckin ruff very good spot yapper big ol adorable doggo, fat boi yapper doggorino. Waggy wags super chub clouds such treat wow such tempt, puggorino smol stop it fren. Woofer you are doing me the shock stop it fren pupperino noodle horse long bois, blep snoot very taste wow.  Snoot very taste wow you are doing me a frighten doge heck big ol pupper long doggo, much ruin diet borking doggo shoober mlem. Stop it fren heckin snoot floofs big ol adorable doggo, noodle horse borking doggo fat boi. Big ol pupper waggy wags very hand that feed shibe noodle horse borking doggo wrinkler borkdrive heckin good boys and girls, floofs bork blop many pats heckin good boys. doggorino you are doing me the shock such treat. Snoot heckin angery woofer borkf very taste wow heckin angery woofer big ol pupper, you are doing me a frighten mlem ur givin me a spook. Doggorino ur givin me a spook blop very jealous pupper maximum borkdrive, ur givin me a spook heckin aqua doggo.\nShibe shoober what a nice floof doge thicc pupperino, extremely cuuuuuute shoober much ruin diet. Very hand that feed shibe shoob borkdrive vvv, boofers the neighborhood pupper. wrinkler. Adorable doggo much ruin diet fat boi you are doing me a frighten what a nice floof, long water shoob maximum borkdrive. Heckin smol borking doggo with a long snoot for pats heck vvv adorable doggo very good spot porgo, wrinkler ruff very jealous pupper pupper maximum borkdrive. Most angery pupper I have ever seen dat tungg tho tungg he made many woofs very hand that feed shibe yapper fat boi, dat tungg tho vvv super chub doggo you are doing me the shock. Wrinkler doggorino shibe very taste wow very good spot ruff, clouds very jealous pupper borking doggo sub woofer.',
      imgSource: 'this is an image source',
    },
    {
      title: 'Vault',
      summary:
        'this is a very long encounter summary. \nDoggo ipsum heckin puggo shoob heckin good boys and girls, boof much ruin diet I am bekom fat long woofer, most angery pupper I have ever seen floofs. Puggorino big ol corgo fluffer floofs, you are doing me the shock most angery pupper I have ever seen tungg shoob, borking doggo lotsa pats such treat. Pats thicc long water shoob snoot lotsa pats boof puggo pupperino doggo pupperino, ruff woofer much ruin diet blop most angery pupper I have ever seen big ol stop it fren very taste wow.\nMuch ruin diet heck you are doing me the shock long doggo length boy heckin, length boy he made many woofs aqua doggo puggorino. Fluffer very good spot doggorino snoot fat boi, doggo yapper doggorino. Boofers smol pats doge extremely cuuuuuute shibe heckin, he made many woofs ur givin me a spook heck I am bekom fat long woofer. Thicc fluffer such treat maximum borkdrive doggo porgo, floofs length boy doggorino. Doge clouds doggo heckin good boys borkf, many pats vvv. Super chub much ruin diet thicc clouds corgo length boy, you are doin me a concern very taste wow ruff. Sub woofer dat tungg tho wow such tempt pupperino, ur givin me a spook mlem. Long doggo clouds you are doing me a frighten doge, waggy wags borking doggo.\nWrinkler pupper big ol pupper big ol wow very biscit bork, you are doing me a frighten adorable doggo you are doing me the shock. Very good spot floofs the neighborhood pupper fat boi adorable doggo long water shoob blep, yapper maximum borkdrive tungg floofs most angery pupper I have ever seen. Boofers floofs very good spot borking doggo, doge. The neighborhood pupper smol yapper porgo doing me a frighten, vvv fat boi.',
      imgSource: 'this is an image source',
    },
    {
      title: 'Riven',
      summary:
        'this is a very long encounter summary. \nDoggo ipsum porgo very good spot I am bekom fat noodle horse long bois big ol, many pats the neighborhood pupper clouds blep. Clouds what a nice floof puggo heck maximum borkdrive big ol pupper, doggorino pupper wrinkler most angery pupper I have ever seen. Waggy wags very taste wow heckin good boys and girls smol borking doggo with a long snoot for pats what a nice floof ur givin me a spook, clouds boof doing me a frighten. Adorable doggo borking doggo heckin long bois, boof. You are doin me a concern pupperino you are doing me a frighten, adorable doggo. Borkf the neighborhood pupper vvv aqua doggo, most angery pupper I have ever seen aqua doggo. You are doing me the shock doge heckin yapper very good spot doing me a frighten, sub woofer borkf fluffer pats. Doggo maximum borkdrive heckin angery woofer boofers doggorino, very hand that feed shibe shoob. Blep length boy many pats puggo doing me a frighten puggorino doggorino, bork heckin good boys yapper shoober such treat, long woofer such treat you are doing me a frighten borking doggo long doggo.\nTungg I am bekom fat maximum borkdrive thicc most angery pupper I have ever seen mlem pupper very jealous pupper bork, clouds pats woofer smol borking doggo with a long snoot for pats doggo you are doing me a frighten corgo. He made many woofs heck tungg wow very biscit much ruin diet, heck puggorino. Doge smol borking doggo with a long snoot for pats heckin good boys he made many woofs clouds shoober, shooberino wrinkler doggorino. Super chub fat boi ur givin me a spook pupperino waggy wags the neighborhood pupper bork, mlem he made many woofs what a nice floof the neighborhood pupper bork, puggo tungg shibe such treat floofs. Maximum borkdrive yapper very good spot boofers mlem, blop you are doin me a concern. Heckin good boys and girls doggorino puggo stop it fren doggo what a nice floof, length boy pats porgo extremely cuuuuuute. Wow such tempt pupperino corgo very good spot, very jealous pupper wow very biscit.\nSuch treat borkf doing me a frighten borkf doggo, puggo borkf heckin. Doggorino wrinkler borkf snoot tungg, much ruin diet wow very biscit. Most angery pupper I have ever seen heckin angery woofer big ol pupper heckin angery woofer length boy, wow very biscit stop it fren tungg. Long woofer corgo stop it fren doge, you are doing me the shock dat tungg tho. Pats mlem yapper long bois very hand that feed shibe, woofer ruff pupper.',
      imgSource: 'this is an image source',
    },
    {
      title: 'Queenswalk',
      summary:
        'this is a very long encounter summary. \nDoggo ipsum tungg. Smol pupper shibe big ol pupper wrinkler, heckin angery woofer snoot pats. Heckin angery woofer boof adorable doggo shoob, stop it fren wow such tempt. Mlem fat boi wrinkler woofer, long woofer adorable doggo. Porgo pats smol long bois, very taste wow. Thicc heckin good boys lotsa pats big ol ur givin me a spook long water shoob, heckin angery woofer most angery pupper I have ever seen clouds maximum borkdrive.\nWrinkler borkdrive snoot stop it fren extremely cuuuuuute, super chub adorable doggo. The neighborhood pupper heckin angery woofer very good spot borkf such treat heckin angery woofer lotsa pats what a nice floof noodle horse, very jealous pupper stop it fren long doggo vvv most angery pupper I have ever seen clouds. You are doing me a frighten mlem heckin shooberino porgo thicc long water shoob, doing me a frighten such treat sub woofer super chub. Puggorino sub woofer mlem very good spot, you are doing me the shock he made many woofs, doggo shooberino. Waggy wags heckin good boys h*ck big ol, long bois.\nHe made many woofs yapper stop it fren shooberino shibe heckin angery woofer, bork ur givin me a spook wrinkler borkf, the neighborhood pupper you are doing me the shock smol you are doin me a concern. heckin vvv fat boi. Very good spot shoober extremely cuuuuuute woofer heck, long doggo porgo. Borking doggo wrinkler borkf blep doggorino boof floofs, length boy clouds very jealous pupper fluffer pupper, blop pats many pats vvv big ol. Adorable doggo thicc porgo, you are doing me a frighten. Wrinkler very taste wow long woofer very hand that feed shibe yapper, very jealous pupper smol borking doggo with a long snoot for pats long doggo. Porgo mlem you are doing me a frighten he made many woofs ur givin me a spook lotsa pats, tungg blop doing me a frighten pats. Shoober sub woofer puggo blop, long bois long woofer.',
      imgSource: 'this is an image source',
    },
  ],
}

export const Raid = (props: Props) => {
  const { selectedRaid: raid } = props

  return (
    <div>
      <h2>{raidSample.title}</h2>
      <Tabs.Root
        defaultValue='Kalli'
        orientation='vertical'
        style={{ display: 'flex' }}
      >
        <Tabs.List className={styles.tabsList}>
          <Tabs.Trigger value='lootTable'>Loot table</Tabs.Trigger>
          {raidSample.encounters.map(e => {
            return (
              <Tabs.Trigger value={e.title} key={e.title}>
                {e.title}
              </Tabs.Trigger>
            )
          })}
        </Tabs.List>
        <div className={styles.tabContentContainer}>
          <Tabs.Content value='lootTable'>
            {raidSample.lootTable.text}
          </Tabs.Content>
          {raidSample.encounters.map(e => {
            return (
              <Tabs.Content value={e.title} key={e.title}>
                <ContentSection title={e.title} summary={e.summary} />
              </Tabs.Content>
            )
          })}
        </div>
      </Tabs.Root>
    </div>
  )
}
