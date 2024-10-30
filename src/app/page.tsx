"use client";

import { useOnResize } from "@/app/use-on-resize";
import { ArrowPathIcon, PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";

const characters = 150;
const delay = 500;

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  const [shouldAutoscroll, setShouldAutoscroll] = useState(true);

  useInterval(
    () => {
      const newText = getNextChars(characters);
      setText((text) => text + newText);
    },
    isPlaying ? delay : null,
  );

  useOnResize(contentRef, () => {
    const scrollableEl = scrollableRef.current;
    if (!scrollableEl) return;

    const maxScrollHeight =
      scrollableEl.scrollHeight - scrollableEl.clientHeight;

    if (shouldAutoscroll) {
      scrollableEl.scrollTop = maxScrollHeight;
    }
  });

  return (
    <>
      <div className="mx-auto mt-8 max-w-sm">
        <div className="relative">
          <div
            ref={scrollableRef}
            onWheel={(e) => {
              const scrollableEl = scrollableRef.current;
              if (!scrollableEl) return;
              const maxScrollHeight =
                scrollableEl.scrollHeight - scrollableEl.clientHeight;
              if (e.deltaY < 0) {
                setShouldAutoscroll(false);
              } else if (scrollableEl.scrollTop === maxScrollHeight) {
                setShouldAutoscroll(true);
              }
            }}
            className="mt-2 h-80 overflow-scroll rounded-lg bg-white shadow"
          >
            <div className="p-4" ref={contentRef}>
              <p className="whitespace-pre-wrap text-gray-700">{text}</p>
            </div>
          </div>

          {!shouldAutoscroll && (
            <div className="absolute inset-x-0 bottom-2 flex justify-center">
              <button
                onClick={() => setShouldAutoscroll(true)}
                className="size-8 rounded bg-white/80 shadow backdrop-blur-xl"
              >
                👇
              </button>
            </div>
          )}
        </div>

        <p className="mt-2 text-center text-xs font-medium text-gray-500">
          <span className="tabular-nums">{text.length.toLocaleString()}</span>
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          className="inline-flex w-32 items-center justify-center gap-1 rounded-lg bg-accent p-2 font-semibold text-white hover:bg-accent-light"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <>
              <PauseIcon className="size-4" /> Pause
            </>
          ) : (
            <>
              <PlayIcon className="size-4" /> Start
            </>
          )}
        </button>
        <button
          className="inline-flex w-32 items-center justify-center gap-1 rounded-lg border-accent bg-gray-300 p-2 font-medium text-gray-500 hover:bg-gray-400/40"
          onClick={() => {
            setText("");
            setIsPlaying(false);
            position = 0;
          }}
        >
          <ArrowPathIcon className="size-4" /> Reset
        </button>
      </div>
    </>
  );
}

const greatGatsbyFull = `In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.

“Whenever you feel like criticizing anyone,” he told me, “just remember that all the people in this world haven’t had the advantages that you’ve had.”

He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I’m inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions. Reserving judgements is a matter of infinite hope. I am still a little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the fundamental decencies is parcelled out unequally at birth.

And, after boasting this way of my tolerance, I come to the admission that it has a limit. Conduct may be founded on the hard rock or the wet marshes, but after a certain point I don’t care what it’s founded on. When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart. Only Gatsby, the man who gives his name to this book, was exempt from my reaction—Gatsby, who represented everything for which I have an unaffected scorn. If personality is an unbroken series of successful gestures, then there was something gorgeous about him, some heightened sensitivity to the promises of life, as if he were related to one of those intricate machines that register earthquakes ten thousand miles away. This responsiveness had nothing to do with that flabby impressionability which is dignified under the name of the “creative temperament”—it was an extraordinary gift for hope, a romantic readiness such as I have never found in any other person and which it is not likely I shall ever find again. No—Gatsby turned out all right at the end; it is what preyed on Gatsby, what foul dust floated in the wake of his dreams that temporarily closed out my interest in the abortive sorrows and short-winded elations of men.

My family have been prominent, well-to-do people in this Middle Western city for three generations. The Carraways are something of a clan, and we have a tradition that we’re descended from the Dukes of Buccleuch, but the actual founder of my line was my grandfather’s brother, who came here in fifty-one, sent a substitute to the Civil War, and started the wholesale hardware business that my father carries on today.

I never saw this great-uncle, but I’m supposed to look like him—with special reference to the rather hard-boiled painting that hangs in father’s office. I graduated from New Haven in 1915, just a quarter of a century after my father, and a little later I participated in that delayed Teutonic migration known as the Great War. I enjoyed the counter-raid so thoroughly that I came back restless. Instead of being the warm centre of the world, the Middle West now seemed like the ragged edge of the universe—so I decided to go East and learn the bond business. Everybody I knew was in the bond business, so I supposed it could support one more single man. All my aunts and uncles talked it over as if they were choosing a prep school for me, and finally said, “Why—ye-es,” with very grave, hesitant faces. Father agreed to finance me for a year, and after various delays I came East, permanently, I thought, in the spring of twenty-two.

The practical thing was to find rooms in the city, but it was a warm season, and I had just left a country of wide lawns and friendly trees, so when a young man at the office suggested that we take a house together in a commuting town, it sounded like a great idea. He found the house, a weather-beaten cardboard bungalow at eighty a month, but at the last minute the firm ordered him to Washington, and I went out to the country alone. I had a dog—at least I had him for a few days until he ran away—and an old Dodge and a Finnish woman, who made my bed and cooked breakfast and muttered Finnish wisdom to herself over the electric stove.

It was lonely for a day or so until one morning some man, more recently arrived than I, stopped me on the road.

“How do you get to West Egg village?” he asked helplessly.

I told him. And as I walked on I was lonely no longer. I was a guide, a pathfinder, an original settler. He had casually conferred on me the freedom of the neighbourhood.

And so with the sunshine and the great bursts of leaves growing on the trees, just as things grow in fast movies, I had that familiar conviction that life was beginning over again with the summer.

There was so much to read, for one thing, and so much fine health to be pulled down out of the young breath-giving air. I bought a dozen volumes on banking and credit and investment securities, and they stood on my shelf in red and gold like new money from the mint, promising to unfold the shining secrets that only Midas and Morgan and Maecenas knew. And I had the high intention of reading many other books besides. I was rather literary in college—one year I wrote a series of very solemn and obvious editorials for the Yale News—and now I was going to bring back all such things into my life and become again that most limited of all specialists, the “well-rounded man.” This isn’t just an epigram—life is much more successfully looked at from a single window, after all.

It was a matter of chance that I should have rented a house in one of the strangest communities in North America. It was on that slender riotous island which extends itself due east of New York—and where there are, among other natural curiosities, two unusual formations of land. Twenty miles from the city a pair of enormous eggs, identical in contour and separated only by a courtesy bay, jut out into the most domesticated body of salt water in the Western hemisphere, the great wet barnyard of Long Island Sound. They are not perfect ovals—like the egg in the Columbus story, they are both crushed flat at the contact end—but their physical resemblance must be a source of perpetual wonder to the gulls that fly overhead. To the wingless a more interesting phenomenon is their dissimilarity in every particular except shape and size.

I lived at West Egg, the—well, the less fashionable of the two, though this is a most superficial tag to express the bizarre and not a little sinister contrast between them. My house was at the very tip of the egg, only fifty yards from the Sound, and squeezed between two huge places that rented for twelve or fifteen thousand a season. The one on my right was a colossal affair by any standard—it was a factual imitation of some Hôtel de Ville in Normandy, with a tower on one side, spanking new under a thin beard of raw ivy, and a marble swimming pool, and more than forty acres of lawn and garden. It was Gatsby’s mansion. Or, rather, as I didn’t know Mr. Gatsby, it was a mansion inhabited by a gentleman of that name. My own house was an eyesore, but it was a small eyesore, and it had been overlooked, so I had a view of the water, a partial view of my neighbour’s lawn, and the consoling proximity of millionaires—all for eighty dollars a month.

Across the courtesy bay the white palaces of fashionable East Egg glittered along the water, and the history of the summer really begins on the evening I drove over there to have dinner with the Tom Buchanans. Daisy was my second cousin once removed, and I’d known Tom in college. And just after the war I spent two days with them in Chicago.

Her husband, among various physical accomplishments, had been one of the most powerful ends that ever played football at New Haven—a national figure in a way, one of those men who reach such an acute limited excellence at twenty-one that everything afterward savours of anticlimax. His family were enormously wealthy—even in college his freedom with money was a matter for reproach—but now he’d left Chicago and come East in a fashion that rather took your breath away: for instance, he’d brought down a string of polo ponies from Lake Forest. It was hard to realize that a man in my own generation was wealthy enough to do that.

Why they came East I don’t know. They had spent a year in France for no particular reason, and then drifted here and there unrestfully wherever people played polo and were rich together. This was a permanent move, said Daisy over the telephone, but I didn’t believe it—I had no sight into Daisy’s heart, but I felt that Tom would drift on forever seeking, a little wistfully, for the dramatic turbulence of some irrecoverable football game.

And so it happened that on a warm windy evening I drove over to East Egg to see two old friends whom I scarcely knew at all. Their house was even more elaborate than I expected, a cheerful red-and-white Georgian Colonial mansion, overlooking the bay. The lawn started at the beach and ran towards the front door for a quarter of a mile, jumping over sundials and brick walks and burning gardens—finally when it reached the house drifting up the side in bright vines as though from the momentum of its run. The front was broken by a line of French windows, glowing now with reflected gold and wide open to the warm windy afternoon, and Tom Buchanan in riding clothes was standing with his legs apart on the front porch.

He had changed since his New Haven years. Now he was a sturdy straw-haired man of thirty, with a rather hard mouth and a supercilious manner. Two shining arrogant eyes had established dominance over his face and gave him the appearance of always leaning aggressively forward. Not even the effeminate swank of his riding clothes could hide the enormous power of that body—he seemed to fill those glistening boots until he strained the top lacing, and you could see a great pack of muscle shifting when his shoulder moved under his thin coat. It was a body capable of enormous leverage—a cruel body.

His speaking voice, a gruff husky tenor, added to the impression of fractiousness he conveyed. There was a touch of paternal contempt in it, even toward people he liked—and there were men at New Haven who had hated his guts.

“Now, don’t think my opinion on these matters is final,” he seemed to say, “just because I’m stronger and more of a man than you are.” We were in the same senior society, and while we were never intimate I always had the impression that he approved of me and wanted me to like him with some harsh, defiant wistfulness of his own.

We talked for a few minutes on the sunny porch.

“I’ve got a nice place here,” he said, his eyes flashing about restlessly.

Turning me around by one arm, he moved a broad flat hand along the front vista, including in its sweep a sunken Italian garden, a half acre of deep, pungent roses, and a snub-nosed motorboat that bumped the tide offshore.

“It belonged to Demaine, the oil man.” He turned me around again, politely and abruptly. “We’ll go inside.”

We walked through a high hallway into a bright rosy-coloured space, fragilely bound into the house by French windows at either end. The windows were ajar and gleaming white against the fresh grass outside that seemed to grow a little way into the house. A breeze blew through the room, blew curtains in at one end and out the other like pale flags, twisting them up toward the frosted wedding-cake of the ceiling, and then rippled over the wine-coloured rug, making a shadow on it as wind does on the sea.

The only completely stationary object in the room was an enormous couch on which two young women were buoyed up as though upon an anchored balloon. They were both in white, and their dresses were rippling and fluttering as if they had just been blown back in after a short flight around the house. I must have stood for a few moments listening to the whip and snap of the curtains and the groan of a picture on the wall. Then there was a boom as Tom Buchanan shut the rear windows and the caught wind died out about the room, and the curtains and the rugs and the two young women ballooned slowly to the floor.

The younger of the two was a stranger to me. She was extended full length at her end of the divan, completely motionless, and with her chin raised a little, as if she were balancing something on it which was quite likely to fall. If she saw me out of the corner of her eyes she gave no hint of it—indeed, I was almost surprised into murmuring an apology for having disturbed her by coming in.

The other girl, Daisy, made an attempt to rise—she leaned slightly forward with a conscientious expression—then she laughed, an absurd, charming little laugh, and I laughed too and came forward into the room.

“I’m p-paralysed with happiness.”

She laughed again, as if she said something very witty, and held my hand for a moment, looking up into my face, promising that there was no one in the world she so much wanted to see. That was a way she had. She hinted in a murmur that the surname of the balancing girl was Baker. (I’ve heard it said that Daisy’s murmur was only to make people lean toward her; an irrelevant criticism that made it no less charming.)

At any rate, Miss Baker’s lips fluttered, she nodded at me almost imperceptibly, and then quickly tipped her head back again—the object she was balancing had obviously tottered a little and given her something of a fright. Again a sort of apology arose to my lips. Almost any exhibition of complete self-sufficiency draws a stunned tribute from me.

I looked back at my cousin, who began to ask me questions in her low, thrilling voice. It was the kind of voice that the ear follows up and down, as if each speech is an arrangement of notes that will never be played again. Her face was sad and lovely with bright things in it, bright eyes and a bright passionate mouth, but there was an excitement in her voice that men who had cared for her found difficult to forget: a singing compulsion, a whispered “Listen,” a promise that she had done gay, exciting things just a while since and that there were gay, exciting things hovering in the next hour.

I told her how I had stopped off in Chicago for a day on my way East, and how a dozen people had sent their love through me.

“Do they miss me?” she cried ecstatically.

“The whole town is desolate. All the cars have the left rear wheel painted black as a mourning wreath, and there’s a persistent wail all night along the north shore.”

“How gorgeous! Let’s go back, Tom. Tomorrow!” Then she added irrelevantly: “You ought to see the baby.”

“I’d like to.”

“She’s asleep. She’s three years old. Haven’t you ever seen her?”

“Never.”

“Well, you ought to see her. She’s—”

Tom Buchanan, who had been hovering restlessly about the room, stopped and rested his hand on my shoulder.

“What you doing, Nick?”

“I’m a bond man.”

“Who with?”

I told him.

“Never heard of them,” he remarked decisively.

This annoyed me.

“You will,” I answered shortly. “You will if you stay in the East.”

“Oh, I’ll stay in the East, don’t you worry,” he said, glancing at Daisy and then back at me, as if he were alert for something more. “I’d be a God damned fool to live anywhere else.”

At this point Miss Baker said: “Absolutely!” with such suddenness that I started—it was the first word she had uttered since I came into the room. Evidently it surprised her as much as it did me, for she yawned and with a series of rapid, deft movements stood up into the room.

“I’m stiff,” she complained, “I’ve been lying on that sofa for as long as I can remember.”

“Don’t look at me,” Daisy retorted, “I’ve been trying to get you to New York all afternoon.”

“No, thanks,” said Miss Baker to the four cocktails just in from the pantry. “I’m absolutely in training.”

Her host looked at her incredulously.

“You are!” He took down his drink as if it were a drop in the bottom of a glass. “How you ever get anything done is beyond me.”

I looked at Miss Baker, wondering what it was she “got done.” I enjoyed looking at her. She was a slender, small-breasted girl, with an erect carriage, which she accentuated by throwing her body backward at the shoulders like a young cadet. Her grey sun-strained eyes looked back at me with polite reciprocal curiosity out of a wan, charming, discontented face. It occurred to me now that I had seen her, or a picture of her, somewhere before.

“You live in West Egg,” she remarked contemptuously. “I know somebody there.”

“I don’t know a single—”

“You must know Gatsby.”

“Gatsby?” demanded Daisy. “What Gatsby?”

Before I could reply that he was my neighbour dinner was announced; wedging his tense arm imperatively under mine, Tom Buchanan compelled me from the room as though he were moving a checker to another square.

Slenderly, languidly, their hands set lightly on their hips, the two young women preceded us out on to a rosy-coloured porch, open toward the sunset, where four candles flickered on the table in the diminished wind.

“Why candles?” objected Daisy, frowning. She snapped them out with her fingers. “In two weeks it’ll be the longest day in the year.” She looked at us all radiantly. “Do you always watch for the longest day of the year and then miss it? I always watch for the longest day in the year and then miss it.”

“We ought to plan something,” yawned Miss Baker, sitting down at the table as if she were getting into bed.

“All right,” said Daisy. “What’ll we plan?” She turned to me helplessly: “What do people plan?”

Before I could answer her eyes fastened with an awed expression on her little finger.

“Look!” she complained; “I hurt it.”

We all looked—the knuckle was black and blue.

“You did it, Tom,” she said accusingly. “I know you didn’t mean to, but you did do it. That’s what I get for marrying a brute of a man, a great, big, hulking physical specimen of a—”

“I hate that word ‘hulking,’ ” objected Tom crossly, “even in kidding.”

“Hulking,” insisted Daisy.

Sometimes she and Miss Baker talked at once, unobtrusively and with a bantering inconsequence that was never quite chatter, that was as cool as their white dresses and their impersonal eyes in the absence of all desire. They were here, and they accepted Tom and me, making only a polite pleasant effort to entertain or to be entertained. They knew that presently dinner would be over and a little later the evening too would be over and casually put away. It was sharply different from the West, where an evening was hurried from phase to phase towards its close, in a continually disappointed anticipation or else in sheer nervous dread of the moment itself.

“You make me feel uncivilized, Daisy,” I confessed on my second glass of corky but rather impressive claret. “Can’t you talk about crops or something?”

I meant nothing in particular by this remark, but it was taken up in an unexpected way.

“Civilization’s going to pieces,” broke out Tom violently. “I’ve gotten to be a terrible pessimist about things. Have you read The Rise of the Coloured Empires by this man Goddard?”

“Why, no,” I answered, rather surprised by his tone.

“Well, it’s a fine book, and everybody ought to read it. The idea is if we don’t look out the white race will be—will be utterly submerged. It’s all scientific stuff; it’s been proved.”

“Tom’s getting very profound,” said Daisy, with an expression of unthoughtful sadness. “He reads deep books with long words in them. What was that word we—”

“Well, these books are all scientific,” insisted Tom, glancing at her impatiently. “This fellow has worked out the whole thing. It’s up to us, who are the dominant race, to watch out or these other races will have control of things.”

“We’ve got to beat them down,” whispered Daisy, winking ferociously toward the fervent sun.

“You ought to live in California—” began Miss Baker, but Tom interrupted her by shifting heavily in his chair.

“This idea is that we’re Nordics. I am, and you are, and you are, and—” After an infinitesimal hesitation he included Daisy with a slight nod, and she winked at me again. “—And we’ve produced all the things that go to make civilization—oh, science and art, and all that. Do you see?”

There was something pathetic in his concentration, as if his complacency, more acute than of old, was not enough to him any more. When, almost immediately, the telephone rang inside and the butler left the porch Daisy seized upon the momentary interruption and leaned towards me.

“I’ll tell you a family secret,” she whispered enthusiastically. “It’s about the butler’s nose. Do you want to hear about the butler’s nose?”

“That’s why I came over tonight.”

“Well, he wasn’t always a butler; he used to be the silver polisher for some people in New York that had a silver service for two hundred people. He had to polish it from morning till night, until finally it began to affect his nose—”

“Things went from bad to worse,” suggested Miss Baker.

“Yes. Things went from bad to worse, until finally he had to give up his position.”

For a moment the last sunshine fell with romantic affection upon her glowing face; her voice compelled me forward breathlessly as I listened—then the glow faded, each light deserting her with lingering regret, like children leaving a pleasant street at dusk.

The butler came back and murmured something close to Tom’s ear, whereupon Tom frowned, pushed back his chair, and without a word went inside. As if his absence quickened something within her, Daisy leaned forward again, her voice glowing and singing.

“I love to see you at my table, Nick. You remind me of a—of a rose, an absolute rose. Doesn’t he?” She turned to Miss Baker for confirmation: “An absolute rose?”

This was untrue. I am not even faintly like a rose. She was only extemporizing, but a stirring warmth flowed from her, as if her heart was trying to come out to you concealed in one of those breathless, thrilling words. Then suddenly she threw her napkin on the table and excused herself and went into the house.

Miss Baker and I exchanged a short glance consciously devoid of meaning. I was about to speak when she sat up alertly and said “Sh!” in a warning voice. A subdued impassioned murmur was audible in the room beyond, and Miss Baker leaned forward unashamed, trying to hear. The murmur trembled on the verge of coherence, sank down, mounted excitedly, and then ceased altogether.

“This Mr. Gatsby you spoke of is my neighbour—” I began.

“Don’t talk. I want to hear what happens.”

“Is something happening?” I inquired innocently.

“You mean to say you don’t know?” said Miss Baker, honestly surprised. “I thought everybody knew.”

“I don’t.”

“Why—” she said hesitantly. “Tom’s got some woman in New York.”

“Got some woman?” I repeated blankly.

Miss Baker nodded.

“She might have the decency not to telephone him at dinner time. Don’t you think?”

Almost before I had grasped her meaning there was the flutter of a dress and the crunch of leather boots, and Tom and Daisy were back at the table.

“It couldn’t be helped!” cried Daisy with tense gaiety.

She sat down, glanced searchingly at Miss Baker and then at me, and continued: “I looked outdoors for a minute, and it’s very romantic outdoors. There’s a bird on the lawn that I think must be a nightingale come over on the Cunard or White Star Line. He’s singing away—” Her voice sang: “It’s romantic, isn’t it, Tom?”

“Very romantic,” he said, and then miserably to me: “If it’s light enough after dinner, I want to take you down to the stables.”

The telephone rang inside, startlingly, and as Daisy shook her head decisively at Tom the subject of the stables, in fact all subjects, vanished into air. Among the broken fragments of the last five minutes at table I remember the candles being lit again, pointlessly, and I was conscious of wanting to look squarely at everyone, and yet to avoid all eyes. I couldn’t guess what Daisy and Tom were thinking, but I doubt if even Miss Baker, who seemed to have mastered a certain hardy scepticism, was able utterly to put this fifth guest’s shrill metallic urgency out of mind. To a certain temperament the situation might have seemed intriguing—my own instinct was to telephone immediately for the police.

The horses, needless to say, were not mentioned again. Tom and Miss Baker, with several feet of twilight between them, strolled back into the library, as if to a vigil beside a perfectly tangible body, while, trying to look pleasantly interested and a little deaf, I followed Daisy around a chain of connecting verandas to the porch in front. In its deep gloom we sat down side by side on a wicker settee.

Daisy took her face in her hands as if feeling its lovely shape, and her eyes moved gradually out into the velvet dusk. I saw that turbulent emotions possessed her, so I asked what I thought would be some sedative questions about her little girl.

“We don’t know each other very well, Nick,” she said suddenly. “Even if we are cousins. You didn’t come to my wedding.”

“I wasn’t back from the war.”

“That’s true.” She hesitated. “Well, I’ve had a very bad time, Nick, and I’m pretty cynical about everything.”

Evidently she had reason to be. I waited but she didn’t say any more, and after a moment I returned rather feebly to the subject of her daughter.

“I suppose she talks, and—eats, and everything.”

“Oh, yes.” She looked at me absently. “Listen, Nick; let me tell you what I said when she was born. Would you like to hear?”

“Very much.”

“It’ll show you how I’ve gotten to feel about—things. Well, she was less than an hour old and Tom was God knows where. I woke up out of the ether with an utterly abandoned feeling, and asked the nurse right away if it was a boy or a girl. She told me it was a girl, and so I turned my head away and wept. ‘All right,’ I said, ‘I’m glad it’s a girl. And I hope she’ll be a fool—that’s the best thing a girl can be in this world, a beautiful little fool.’

“You see I think everything’s terrible anyhow,” she went on in a convinced way. “Everybody thinks so—the most advanced people. And I know. I’ve been everywhere and seen everything and done everything.” Her eyes flashed around her in a defiant way, rather like Tom’s, and she laughed with thrilling scorn. “Sophisticated—God, I’m sophisticated!”

The instant her voice broke off, ceasing to compel my attention, my belief, I felt the basic insincerity of what she had said. It made me uneasy, as though the whole evening had been a trick of some sort to exact a contributory emotion from me. I waited, and sure enough, in a moment she looked at me with an absolute smirk on her lovely face, as if she had asserted her membership in a rather distinguished secret society to which she and Tom belonged.

`;

let position = 0;
function getNextChars(n: number) {
  const result = greatGatsbyFull.slice(position, position + n);
  position += n;
  return result;
}

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval and call the callback immediately.
  useEffect(() => {
    if (delay === null) {
      return;
    }

    // Call the callback immediately.
    savedCallback.current?.();

    function tick() {
      savedCallback.current?.();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
