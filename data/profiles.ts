import type { AxisKey } from "./axes"

export type Profile = {
  /** Must match Thinker.name exactly */
  name: string
  fullName: string
  lifespan: string
  /** Optional — Portrait falls back to initials if omitted or missing. */
  image?: string
  wiki?: string
  /**
   * One sentence per axis explaining that thinker's position, referencing
   * their work by title. Work titles use ***bold italic*** (parsed by the
   * ProfileCard renderer).
   */
  axisNotes: Record<AxisKey, string>
  /**
   * People / works this thinker draws on and cites. Markdown-supported
   * (***bold italic*** for work titles).
   */
  influences?: string[]
  /**
   * People this thinker explicitly argues against. Markdown-supported.
   */
  dissents?: string[]
}

export const profiles: Profile[] = [
  {
    name: "Machiavelli",
    fullName: "Niccolò Machiavelli",
    lifespan: "1469–1527",
    image: "/thinkers/machiavelli.jpg",
    wiki: "https://en.wikipedia.org/wiki/Niccolò_Machiavelli",
    axisNotes: {
      epistemology:
        "Political truths are knowable through the disciplined study of history — ***The Prince*** and the ***Discourses on Livy*** treat Livy's Rome as a data set, not a story.",
      anthropology:
        "In ***The Prince***, ch. 17: men are 'ungrateful, fickle, false, cowardly, covetous' — the description any serious political theory has to start from.",
      politicalOntology:
        "Politics has its own logic that cannot be reduced to private morality — the founding move of the whole realist tradition.",
      universalism:
        "The ***Discourses*** treat republics in specifically Roman terms; the aim is Italian civic virtue rooted in a particular people, not universal justice.",
      individualism:
        "The unit is the *stato* and the *civitas* — the state and the citizen body — not the individual person.",
      order:
        "Designed within limits — the prince *acts* and the founder *constructs*, but fortune constrains what any design can accomplish.",
      authority:
        "***The Prince*** speaks to the ruler; the ***Discourses*** to the citizen body — but organized minorities are always doing the actual work.",
      temporal:
        "Cyclical — corruption and renewal recur; ancient Rome in the ***Discourses*** shows how to break the cycle better than any modern example.",
    },
    influences: [
      "Livy — the ***History of Rome*** is the ***Discourses on Livy***'s central text",
      "Polybius on cyclical government (***Histories***, Book VI)",
      "Tacitus, Xenophon, Cicero, Aristotle",
      "The Roman republican tradition as lived reality, not abstraction",
    ],
    dissents: [
      "The Christian 'mirror for princes' tradition (Erasmus, Aquinas on political ethics)",
      "Savonarola — the theocratic republican who preceded him in Florence",
      "Any politics that treats private virtue and public virtue as identical",
    ],
  },
  {
    name: "Hobbes",
    fullName: "Thomas Hobbes",
    lifespan: "1588–1679",
    image: "/thinkers/hobbes.jpg",
    wiki: "https://en.wikipedia.org/wiki/Thomas_Hobbes",
    axisNotes: {
      epistemology:
        "***Leviathan*** derives its political conclusions geometrically, from clear definitions — Hobbes treats political truth as demonstrable as Euclid.",
      anthropology:
        "In the state of nature, life is 'solitary, poor, nasty, brutish, and short' — humans are competitive by default and require constraint.",
      politicalOntology:
        "Politics is the science of avoiding the war of all against all — its own domain with laws of motion as strict as physics.",
      universalism:
        "The argument in ***Leviathan*** is universal — every human, in every place, faces the same problem and needs the same kind of solution.",
      individualism:
        "Individuals contract into the sovereign; the premise is individualist even where the conclusion is absolutist.",
      order:
        "Maximally designed — the sovereign is a rational construction to solve the state-of-nature problem, not something that grew.",
      authority:
        "Absolute and elite — one sovereign, undivided, because divided authority collapses back into the war of all against all.",
      temporal:
        "Neutral to mildly progressive — reason can build a durable civil peace where earlier ages could not.",
    },
    influences: [
      "Thucydides — Hobbes translated the ***History of the Peloponnesian War*** into English",
      "Galileo — materialism, geometry as the model of demonstrative science",
      "Euclid — geometric method",
      "Francis Bacon — Hobbes served as his secretary",
    ],
    dissents: [
      "Aristotle — ***Leviathan*** ch. 46 attacks Aristotelian teleology as 'vain philosophy'",
      "The Puritan resistance theorists (Milton, Rutherford)",
      "Coke and the common-lawyers on customary law limiting sovereignty",
      "Cardinal Bellarmine on papal / spiritual authority over civil rulers",
    ],
  },
  {
    name: "Rousseau",
    fullName: "Jean-Jacques Rousseau",
    lifespan: "1712–1778",
    image: "/thinkers/rousseau.jpg",
    wiki: "https://en.wikipedia.org/wiki/Jean-Jacques_Rousseau",
    axisNotes: {
      epistemology:
        "The general will exists and is knowable — the ***Social Contract*** and ***Discourse on Inequality*** treat political truth as available through conscience and right reasoning, not pure logic.",
      anthropology:
        "Man is born free but is everywhere in chains — humans are naturally good and corrupted by society, not the reverse.",
      politicalOntology:
        "Politics is moral education by other means; a legitimate order expresses the general will, not merely one that holds power.",
      universalism:
        "Universalist by principle — the general will is a moral form applicable to any political community rightly constituted.",
      individualism:
        "Collectivist — the general will subsumes the individual; real freedom is realized only through participation in the whole.",
      order:
        "The ***Social Contract*** is a designed order derived from principle — organic tradition is exactly what he critiques.",
      authority:
        "Radically popular — sovereignty is inalienable and belongs to the assembled people, not to representatives or elites.",
      temporal:
        "Mixed — civilization has been a fall from natural goodness, but the ***Social Contract*** points forward to a legitimate order not yet built.",
    },
    influences: [
      "Plato — the ***Republic*** as model of the just polity",
      "Cicero on civic virtue",
      "Montesquieu on political forms",
      "Republican Rome and Sparta as historical exemplars",
    ],
    dissents: [
      "Hobbes — the state of nature was NOT nasty and brutish",
      "Locke on private property as the origin of legitimate inequality",
      "Voltaire — bitter personal and philosophical rivalry",
      "The Encyclopedists' cosmopolitan urban rationalism",
    ],
  },
  {
    name: "Locke",
    fullName: "John Locke",
    lifespan: "1632–1704",
    image: "/thinkers/locke.jpg",
    wiki: "https://en.wikipedia.org/wiki/John_Locke",
    axisNotes: {
      epistemology:
        "Natural rights are knowable by reason — the ***Second Treatise of Government*** grounds politics in truths available to any thinking person.",
      anthropology:
        "Humans in the state of nature are neither angels nor devils but rational beings who mostly cooperate and occasionally cheat.",
      politicalOntology:
        "Politics is instrumental — its function is to secure natural rights that exist prior to and independent of it.",
      universalism:
        "Universalist — the rights of Englishmen are really the rights of all persons, everywhere, as such.",
      individualism:
        "Individualist to the core — the ***Second Treatise*** grounds government in the consent and rights of individual persons.",
      order:
        "Consent-based design, but working with inherited institutions — moderate constructivism, not blank-slate.",
      authority:
        "Popular in origin — legitimate government requires the consent of the governed and can be replaced when it betrays trust.",
      temporal:
        "Mildly progressive — reason and property together make possible a more civilized political order than has previously existed.",
    },
    influences: [
      "Richard Hooker — medieval English natural-law tradition",
      "Hugo Grotius and Samuel Pufendorf — natural law and law of nations",
      "The English common-law tradition (Coke, the ancient constitution)",
      "Francis Bacon on empirical method",
    ],
    dissents: [
      "Sir Robert Filmer — the ***First Treatise of Government*** demolishes ***Patriarcha***'s divine-right absolutism",
      "Hobbes on absolute sovereignty",
      "Descartes on innate ideas",
      "Established religion in favor of toleration (***A Letter Concerning Toleration***)",
    ],
  },
  {
    name: "Kant",
    fullName: "Immanuel Kant",
    lifespan: "1724–1804",
    image: "/thinkers/kant.jpg",
    wiki: "https://en.wikipedia.org/wiki/Immanuel_Kant",
    axisNotes: {
      epistemology:
        "Political truths are demonstrable from pure reason — the ***Metaphysics of Morals*** and ***Perpetual Peace*** treat them as strictly as mathematics.",
      anthropology:
        "Humans are ends in themselves, capable of moral autonomy — reason gives dignity even where inclination pulls toward self-interest.",
      politicalOntology:
        "Politics IS applied ethics — the categorical imperative binds statesmen as strictly as it binds private persons.",
      universalism:
        "Radically universalist — the moral law and the perfect political constitution apply to every rational being, without exception.",
      individualism:
        "Individualist — the person as end-in-themselves is the fundamental unit; states exist to protect that dignity.",
      order:
        "Designed by reason — the republican constitution and the federation of free states in ***Perpetual Peace*** are rational constructions.",
      authority:
        "Constitutional-republican — neither democracy nor autocracy, but rule by law binding rulers as much as ruled.",
      temporal:
        "Progressive — in ***Idea for a Universal History***, humankind moves however slowly toward the 'kingdom of ends' and perpetual peace.",
    },
    influences: [
      "David Hume — Kant said Hume 'awoke him from dogmatic slumber'",
      "Rousseau — Kant kept Rousseau's portrait over his desk",
      "Newton — deterministic natural order as the model",
      "Leibniz and Wolff — the rationalist tradition Kant reconstructs",
    ],
    dissents: [
      "Hume's moral skepticism (though influenced by his epistemology)",
      "The empiricists on the origin of moral principles in sentiment",
      "Frederick the Great's realpolitik in political practice",
      "Any politics that would treat persons as mere means",
    ],
  },
  {
    name: "Marx",
    fullName: "Karl Marx",
    lifespan: "1818–1883",
    image: "/thinkers/marx.jpg",
    wiki: "https://en.wikipedia.org/wiki/Karl_Marx",
    axisNotes: {
      epistemology:
        "Historical materialism is a *science* — ***Capital*** treats political-economic laws as objectively knowable; the later ideology-critique tradition would soften this, but Marx himself claimed concrete truth.",
      anthropology:
        "Humans are naturally cooperative producers; alienation and greed are products of capitalist relations, not human nature.",
      politicalOntology:
        "Politics reduces to economics — in ***The Communist Manifesto*** the state is 'a committee for managing the common affairs of the bourgeoisie.'",
      universalism:
        "Universalist in the strongest sense — the ***Manifesto*** ends with 'workers of all countries, unite' for a reason.",
      individualism:
        "Collectivist — the class is the historical subject; individualism is a bourgeois ideology.",
      order:
        "Designed for the transition — planned socialism replaces spontaneous capitalism, though the final communism is post-political.",
      authority:
        "In theory the proletariat rules directly; in practice the vanguard party keeps appearing whenever the theory meets institutions.",
      temporal:
        "Strongly progressive — history moves through determinate stages toward a final classless society.",
    },
    influences: [
      "Hegel — dialectics inverted from idealism to materialism ('turned on his head')",
      "Feuerbach — critique of religion as human projection",
      "Adam Smith and David Ricardo — classical political economy",
      "The French socialists (Saint-Simon, Fourier) — framework inherited while attacking 'utopian socialism'",
    ],
    dissents: [
      "Proudhon — ***The Poverty of Philosophy*** is a book-length attack",
      "Bakunin — the Marx-Bakunin split fractured the First International",
      "Bruno Bauer and the Young Hegelians (***The Holy Family***)",
      "Ferdinand Lassalle on the state as an ally of workers",
    ],
  },
  {
    name: "Burke",
    fullName: "Edmund Burke",
    lifespan: "1729–1797",
    image: "/thinkers/burke.jpg",
    wiki: "https://en.wikipedia.org/wiki/Edmund_Burke",
    axisNotes: {
      epistemology:
        "Truth is embedded in inherited institutions — the ***Reflections on the Revolution in France*** argue generations of practice contain more wisdom than any single mind.",
      anthropology:
        "Humans are neither angels nor devils but limited beings whose passions require the check of custom, prejudice, and religion.",
      politicalOntology:
        "Politics is downstream of culture and religion — moral and spiritual order shape political forms, not the other way around.",
      universalism:
        "Particularist — the ***Reflections*** insist that rights are the specific rights of Englishmen, not abstract universal claims.",
      individualism:
        "Collective — the nation is a partnership 'between those who are living, those who are dead, and those who are to be born.'",
      order:
        "Radically emergent — order accumulates from lived experience and cannot be safely redesigned from first principles.",
      authority:
        "Elite / aristocratic — the 'natural aristocracy' of experience and inherited responsibility, not the mob or the theorist.",
      temporal:
        "Declinist — the French Revolution was a fall from civilizational continuity, and the task of politics is to conserve.",
    },
    influences: [
      "Cicero on constitutional restraint and prudence",
      "Sir Edward Coke and the English common-law tradition",
      "Adam Smith — personal friend and mutual influence",
      "The Whig tradition of Locke read conservatively",
    ],
    dissents: [
      "The French revolutionaries — the ***Reflections*** are the founding conservative polemic",
      "Rousseau — Burke blames him as the intellectual source of the Terror",
      "Richard Price — the ***Reflections*** target his sermon celebrating the Revolution",
      "Tom Paine — ***Rights of Man*** is Paine's direct reply to Burke",
    ],
  },
  {
    name: "Rothbard",
    fullName: "Murray Rothbard",
    lifespan: "1926–1995",
    image: "/thinkers/rothbard.jpg",
    wiki: "https://en.wikipedia.org/wiki/Murray_Rothbard",
    axisNotes: {
      epistemology:
        "Praxeology in ***Man, Economy, and State*** — economic and political truths are deducible a priori from the axiom of purposeful human action.",
      anthropology:
        "Individuals are rational actors pursuing subjective ends; peaceful cooperation, not predation, is the natural pattern where property rights are respected.",
      politicalOntology:
        "The state is a predatory institution — ***Anatomy of the State*** shows it lives off the productive by coercion rather than by voluntary exchange.",
      universalism:
        "Neutral in principle — natural rights are universal, but Rothbard is a fierce decentralist in application (small polities, secession, no imperialism).",
      individualism:
        "Extreme individualism — only individuals act, only individuals have rights, and any collective claim covers some individual's power grab.",
      order:
        "Emergent — spontaneous order arising from voluntary exchange is the only legitimate kind; designed states are aggressions on that order.",
      authority:
        "None legitimate — the anarcho-capitalist position is that no coercive authority can be justified; all legitimate arrangements are contractual.",
      temporal:
        "Declinist — the modern state has grown steadily since 1789, and every generation of 'reform' has expanded rather than reduced its predation.",
    },
    influences: [
      "Ludwig von Mises — his teacher; ***Human Action*** as core text",
      "Frank Chodorov and Albert Jay Nock — old-right individualism",
      "Franz Oppenheimer — the state-as-predator theory",
      "Lysander Spooner — natural rights + individualist anarchism",
      "The Austrian school (Menger, Böhm-Bawerk)",
    ],
    dissents: [
      "Ayn Rand — Rothbard broke publicly with her circle",
      "Hayek — attacked his welfare-state concessions in ***The Road to Serfdom***",
      "Milton Friedman — Chicago School dismissed as statist by Austrian standards",
      "Marxists and utilitarians on the labor theory of value and aggregate welfare",
    ],
  },
  {
    name: "Gramsci",
    fullName: "Antonio Gramsci",
    lifespan: "1891–1937",
    image: "/thinkers/gramsci.jpg",
    wiki: "https://en.wikipedia.org/wiki/Antonio_Gramsci",
    axisNotes: {
      epistemology:
        "Marxist historical materialism as science, but ***The Prison Notebooks*** insist truth is always situated in a specific 'national-popular' formation.",
      anthropology:
        "Workers can achieve socialist consciousness, but only via the organic intellectual — humans are formed politically, not by nature alone.",
      politicalOntology:
        "Politics is downstream of culture and hegemony — the 'war of position' captures civil society before any state seizure is possible.",
      universalism:
        "Marxist universalism in principle, but strategic attention to particular national conditions (the 'Southern Question,' Italian specificities).",
      individualism:
        "Collectivist — the class, the party, the historical bloc are the political agents; individual liberation waits for collective transformation.",
      order:
        "Designed — the 'war of position' is a deliberate strategy for organic intellectuals to build counter-hegemony over generations.",
      authority:
        "Vanguardist, but with populist roots — organic intellectuals rise from and remain accountable to the working class.",
      temporal:
        "Progressive — the ***Notebooks*** assume history moves through hegemonic struggles toward a socialist future.",
    },
    influences: [
      "Marx and Engels — the base of the whole project",
      "Lenin — Gramsci read the Bolshevik strategist seriously; his critique is friendly",
      "Machiavelli — the prison essay '***The Modern Prince***' reworks ***The Prince*** as the revolutionary party",
      "Benedetto Croce — Italian idealist Gramsci wrestled against as his native intellectual antagonist",
      "Georges Sorel on political myth",
    ],
    dissents: [
      "Economism / mechanical Marxism — the 'vulgar' reading of Marx he attacks throughout",
      "Fascism — the ***Notebooks*** are written in Mussolini's prison against Mussolini's regime",
      "Reformist social democracy",
      "Croce as bourgeois idealism dressed as universal culture",
    ],
  },
  {
    name: "Schmitt",
    fullName: "Carl Schmitt",
    lifespan: "1888–1985",
    image: "/thinkers/schmitt.jpg",
    wiki: "https://en.wikipedia.org/wiki/Carl_Schmitt",
    axisNotes: {
      epistemology:
        "Decisionist — in ***Political Theology***, sovereign is he who decides the exception; truth is what the concrete decision establishes.",
      anthropology:
        "Anthropologically pessimistic — ***The Concept of the Political*** insists real political thinkers begin from the premise that man is dangerous.",
      politicalOntology:
        "The political IS the friend-enemy distinction — ***The Concept of the Political*** is the sharpest statement of political ontology as its own irreducible domain.",
      universalism:
        "Radically particularist — political concepts always refer to concrete situations and concrete enemies, never to humanity in the abstract.",
      individualism:
        "Collectivist — the political community, defined by the friend-enemy distinction, is the real unit; liberal individualism dissolves the political.",
      order:
        "Designed by sovereign decision — constitutional order emerges from the sovereign act, not from procedures.",
      authority:
        "Elite / sovereign — the katechon, the decisive leader, the state of exception; liberal parliamentarism is at best a legitimating fiction.",
      temporal:
        "Cyclical toward declinist — modernity has depoliticized the political, but the concrete will inevitably return.",
    },
    influences: [
      "Hobbes — ***Leviathan*** as the founding realist text",
      "Machiavelli",
      "Donoso Cortés — Spanish counter-revolutionary Catholic",
      "Joseph de Maistre — throne-and-altar reaction",
      "Georges Sorel on myth and violence",
    ],
    dissents: [
      "Liberal parliamentarism — ***The Crisis of Parliamentary Democracy*** is the sustained attack",
      "Hans Kelsen and legal positivism",
      "Enlightenment universalism and the discourse of 'humanity'",
      "Weimar liberals as a class",
    ],
  },
  {
    name: "Ron Paul",
    fullName: "Ron Paul",
    lifespan: "b. 1935 (US Congressman; YAL founder)",
    image: "/thinkers/ronpaul.jpg",
    wiki: "https://en.wikipedia.org/wiki/Ron_Paul",
    axisNotes: {
      epistemology:
        "Austrian a priori economics (Mises via Rothbard) + natural law — ***End the Fed*** and ***The Revolution: A Manifesto*** treat economic and constitutional truths as knowable.",
      anthropology:
        "Individuals are basically rational when free; it is the state, not human nature, that mostly corrupts.",
      politicalOntology:
        "Realist about the state as a coercive institution; committed to constitutional forms as the only workable check.",
      universalism:
        "Natural rights are universal in principle; American constitutional restraint is the specific application.",
      individualism:
        "Individualist — liberty is a property of persons, and any collective claim on the person requires strict justification.",
      order:
        "Traditional constitutional order — respect for the Founders' design, skepticism of centrally-designed reform.",
      authority:
        "Populist, grassroots, deeply anti-establishment — the whole 'Ron Paul Revolution' was a movement against elite consensus.",
      temporal:
        "Declinist about the American state — a long slide from constitutional restraint that requires restoration, not further construction.",
    },
    influences: [
      "Murray Rothbard — direct Austrian influence and personal friendship",
      "Ludwig von Mises — Austrian economics as the theoretical base",
      "Frédéric Bastiat — ***The Law*** and the seen-vs-unseen argument",
      "The American Founders — Jefferson, Madison, the Anti-Federalists",
      "Hans Sennholz and the mid-century American Austrians",
    ],
    dissents: [
      "The Federal Reserve system (***End the Fed***)",
      "Neoconservative foreign policy — Kristol, Wolfowitz, the McCain wing",
      "The two-party establishment",
      "Progressive-liberal economics and central planning generally",
    ],
  },
  {
    name: "Jefferson",
    fullName: "Thomas Jefferson",
    lifespan: "1743–1826",
    image: "/thinkers/jefferson.jpg",
    wiki: "https://en.wikipedia.org/wiki/Thomas_Jefferson",
    axisNotes: {
      epistemology:
        "Enlightenment reason — the ***Declaration of Independence*** treats the causes of separation as demonstrable to a 'candid world.'",
      anthropology:
        "Mostly optimistic about educated citizens; wary of what concentrated power does to human character.",
      politicalOntology:
        "Politics as securing natural rights that exist prior to government — instrumentalism with strong moral framing.",
      universalism:
        "'All men are created equal' is universal in principle, applied through a particular American republican form.",
      individualism:
        "Individualist — the person's rights and self-government (the yeoman farmer as archetype) are the point.",
      order:
        "The ***Declaration*** is a designed document, but Jefferson distrusts blueprint states and prefers organic republican forms.",
      authority:
        "Populist-agrarian — the yeoman citizen, the ward republic, and generational renewal ('the tree of liberty must be refreshed…').",
      temporal:
        "Progressive — every generation should re-found politics; the ***Kentucky Resolutions*** and letters to Madison anticipate ongoing renewal.",
    },
    influences: [
      "John Locke — the ***Second Treatise*** is directly reworked in the ***Declaration***",
      "Cicero and the Roman republican tradition",
      "Montesquieu on separation of powers",
      "The Scottish Enlightenment (Hutcheson, Ferguson)",
      "Algernon Sidney's ***Discourses Concerning Government***",
    ],
    dissents: [
      "Hamilton and the Federalists — central banking, energetic executive, standing armies",
      "Aristocratic and monarchical politics generally",
      "Established religion (the ***Virginia Statute for Religious Freedom***)",
      "Hobbes and the divine-right tradition",
    ],
  },
  {
    name: "Friedman",
    fullName: "Milton Friedman",
    lifespan: "1912–2006",
    image: "/thinkers/friedman.jpg",
    wiki: "https://en.wikipedia.org/wiki/Milton_Friedman",
    axisNotes: {
      epistemology:
        "Positive economics — ***A Monetary History of the United States*** treats economic questions as empirically testable, not merely normative.",
      anthropology:
        "Rational-actor optimism — persons pursue their interests intelligently when institutions leave them free to.",
      politicalOntology:
        "Politics reduces largely to market failure and its correction — the Chicago approach treats economic laws as more fundamental than political ones.",
      universalism:
        "Markets and freedom are universal principles — ***Capitalism and Freedom*** presents them as broadly applicable.",
      individualism:
        "Individualist methodologically and normatively — the person, not the class or the nation, is the unit of choice.",
      order:
        "Designed by rules — the k-percent monetary rule, school-choice vouchers, negative income tax; designed reforms within an existing framework.",
      authority:
        "Constitutional-democratic — the state should be small but real; ***Free to Choose*** argues for popular understanding of economic freedom.",
      temporal:
        "Progressive under the right rules — freedom expanding over time when markets and monetary discipline are respected.",
    },
    influences: [
      "Frank Knight — Chicago mentor",
      "Henry Simons — Chicago liberal precursor",
      "Adam Smith — ***The Wealth of Nations*** as canonical text",
      "F. A. Hayek — ***The Road to Serfdom*** as touchstone",
      "Anna Schwartz — co-author of ***A Monetary History of the United States***",
    ],
    dissents: [
      "Keynes — ***A Monetary History*** rewrites Keynesian accounts of the Great Depression",
      "Galbraith and the postwar liberal consensus",
      "Nixon's wage-and-price controls",
      "Rothbard-style anarcho-capitalism — Friedman kept the state, just wanted it small",
    ],
  },
  {
    name: "DAN!",
    fullName: "Dan Taylor",
    lifespan: "1998",
    image: "/thinkers/daniel.png",
    axisNotes: {
      epistemology:
        "Names ***veritas*** as a first principle in the ***Working Synthesis*** — objective political truth is knowable, and refusing to know it is itself a moral failing.",
      anthropology:
        "Deeply pessimistic realism — humans left to themselves drift, corrupt, or get captured; organizing well is the only defense. Near-Hobbesian on nature.",
      politicalOntology:
        "Maximum autonomy — the Rothfeld line load-bearing: ***politics is the adjudication of power***. Every YAL and Invictus strategy begins from this ontology.",
      universalism:
        "Nearly neutral — Christian universalism (all souls before God) balanced against American-heritage particularism (this specific constitutional tradition, this specific people). The two coexist in his frame.",
      individualism:
        "Individualist — YAL's core mission is individual liberty in a Lockean-Rothbardian frame; the ***Working Synthesis*** treats the person's flourishing as what politics is ultimately for.",
      order:
        "Burkean — deep respect for inherited constitutional forms; skeptical of blueprint reform; traditions carry wisdom the designer cannot always articulate.",
      authority:
        "Elite-leaning — the ***Realist Lineage — Machiavelli to Rothfeld*** work treats trained operators as necessary; disorganized mass loses to organized cadre.",
      temporal:
        "Mildly declinist — the ***Working Synthesis*** flags 'was the Enlightenment the wrong direction' as a live open question, and the strategic project is largely restorative rather than progressive.",
    },
    influences: [
      "Mike Rothfeld — 'politics is the adjudication of power'",
      "H.L. Richardson — ***Confrontational Politics*** as tactical scripture",
      "Saul Alinsky — for tactics, not ideology",
      "Machiavelli — ***The Prince*** and the ***Discourses***",
      "Murray Rothbard — Austrian economics and ***Anatomy of the State***",
      "Carl Schmitt — friend/enemy discipline",
      "Ron Paul — YAL's founding vision",
      "The American Founders (Jefferson, Madison, the Anti-Federalists)",
    ],
    dissents: [
      "Progressive liberal universalism ('we're all one big humanity')",
      "Managerial / no-labels moderate conservatism",
      "NEOTR violators — right-on-right friendly fire",
      "Ends-justify-any-means hard Machiavellianism",
    ],
  },

  // ---- Contemporary / 20th-c political figures ----
  {
    name: "Trotsky",
    fullName: "Leon Trotsky",
    lifespan: "1879–1940",
    image: "/thinkers/trotsky.jpg",
    wiki: "https://en.wikipedia.org/wiki/Leon_Trotsky",
    axisNotes: {
      epistemology:
        "Dialectical materialism as science — ***The History of the Russian Revolution*** treats revolutionary laws as objectively knowable, more orthodox than even Lenin on Marxist theory.",
      anthropology:
        "Workers are corrupted by bourgeois consciousness but redeemable through revolutionary practice — Marxist ambivalent optimism.",
      politicalOntology:
        "Realist about state power welded to materialist theory of history; the Red Army leader was a hardened operator.",
      universalism:
        "Extreme universalist — ***The Permanent Revolution*** insists socialism cannot survive in one country; the workers of the world must unite globally.",
      individualism:
        "Extreme collectivist — the class and the party are the historical subject; individual liberation waits for global proletarian victory.",
      order:
        "Maximally designed — the vanguard party and revolutionary state as engineered instruments of history.",
      authority:
        "Vanguardist elite — the trained cadre leads; but bitterly critical of Stalinist bureaucratic degeneration in ***The Revolution Betrayed***.",
      temporal:
        "Strongly progressive — history moves through determinate stages toward classless communism, and permanent revolution keeps it moving.",
    },
    influences: [
      "Marx and Engels — the foundation",
      "Lenin — Trotsky joined the Bolsheviks late but became second only to Lenin",
      "Parvus (Alexander Helphand) — the theory of permanent revolution originated with him",
      "Hegelian dialectics through Marx",
    ],
    dissents: [
      "Stalin — ***The Revolution Betrayed*** is the systematic indictment of Stalinist bureaucracy",
      "'Socialism in one country' — the whole permanent-revolution thesis was written against Bukharin/Stalin",
      "Mensheviks and reformist social democracy",
      "Kautsky as 'the renegade' (following Lenin)",
    ],
  },
  {
    name: "Trump",
    fullName: "Donald Trump",
    lifespan: "b. 1946 (45th and 47th US President)",
    image: "/thinkers/trump.jpg",
    wiki: "https://en.wikipedia.org/wiki/Donald_Trump",
    axisNotes: {
      epistemology:
        "Instrumentalist — truth is what serves the current move; ***The Art of the Deal*** treats persuasion and narrative as more real than 'facts.'",
      anthropology:
        "Transactional pessimism — people act on interest, leverage, and status; the world is a zero-sum negotiation.",
      politicalOntology:
        "Pure realist — the political IS the deal, the leverage, the winning move; abstract principle is for people who lose.",
      universalism:
        "Sharply particularist — America First; other nations are counterparties, not fellow members of a universal community.",
      individualism:
        "Mixed — transactional individualism at the personal level, populist collective ('the forgotten men and women') at the political.",
      order:
        "Some designed disruption (tariffs, executive orders) but no coherent constructivist program; more instinct than blueprint.",
      authority:
        "Strong-leader populism — decisive singular authority claiming to embody the popular will; MAGA as movement.",
      temporal:
        "Declinist — 'Make America Great AGAIN' is a restorationist frame; the country was better and needs recovering.",
    },
    influences: [
      "Roy Cohn — mentor in New York power politics",
      "Norman Vincent Peale — ***The Power of Positive Thinking***, family church influence",
      "Steve Bannon — populist-nationalist synthesis (in his first term)",
      "Pat Buchanan's paleoconservative America First (whether cited or not, the frame overlaps)",
      "***The Art of the Deal*** (Trump / Schwartz) — his own operating manual",
    ],
    dissents: [
      "The Bush / Cheney neoconservative establishment",
      "Free-trade Republican orthodoxy (Reagan through Romney)",
      "Progressive multiculturalism and the 'ruling class' broadly",
      "NATO expansion, endless wars, elite consensus",
    ],
  },
  {
    name: "AOC",
    fullName: "Alexandria Ocasio-Cortez",
    lifespan: "b. 1989 (US Congresswoman, NY-14)",
    image: "/thinkers/aoc.jpg",
    wiki: "https://en.wikipedia.org/wiki/Alexandria_Ocasio-Cortez",
    axisNotes: {
      epistemology:
        "Democratic-socialist truths grounded in social-justice conviction — climate science, wealth-inequality data, and lived experience treated as knowable and morally binding.",
      anthropology:
        "Optimistic — people are basically cooperative and generous when institutional oppression is removed.",
      politicalOntology:
        "Moralist framing dominant — politics is where justice is done or denied; the ***Green New Deal*** frames climate and jobs as a moral emergency.",
      universalism:
        "Universalist — human rights, global solidarity, immigration justice as universal claims.",
      individualism:
        "Collectivist — class-conscious, movement politics, unions and mass mobilization as the political subject.",
      order:
        "Designed — the ***Green New Deal*** is a large-scale constructivist program (industrial policy, jobs guarantee, welfare state).",
      authority:
        "Populist — movement politics, mass mobilization, working-class organizing against elite consensus.",
      temporal:
        "Strongly progressive — the moral arc of history bends toward justice, and organized politics accelerates it.",
    },
    influences: [
      "Bernie Sanders — direct political mentor; ***Democratic Socialism*** as frame",
      "Ta-Nehisi Coates — ***Between the World and Me***, racial-justice framing",
      "Naomi Klein — ***This Changes Everything***, climate-capitalism critique",
      "The Democratic Socialists of America intellectual milieu",
      "Latin American liberation-theology and grassroots-organizing traditions",
    ],
    dissents: [
      "Corporate-Democratic centrism (Clinton / Pelosi / Schumer wing)",
      "Fossil-fuel-industry political influence",
      "The military-industrial complex and permanent-war consensus",
      "Right-wing populism as a fake anti-elitism that protects billionaires",
    ],
  },
  {
    name: "JD Vance",
    fullName: "JD Vance",
    lifespan: "b. 1984 (US Vice President; former Senator, OH)",
    image: "/thinkers/vance.jpg",
    wiki: "https://en.wikipedia.org/wiki/JD_Vance",
    axisNotes: {
      epistemology:
        "Postliberal Catholic + populist truth-telling — moral realism about social decline; ***Hillbilly Elegy*** treats lived working-class experience as evidence liberal experts miss.",
      anthropology:
        "Skeptical — atomization, addiction, and dependency show what happens when the checks of family, church, and community weaken.",
      politicalOntology:
        "Realist about power and coalitions; postliberal skepticism that neutral proceduralism can hold a political order.",
      universalism:
        "Particularist national conservative — the nation, culture, and community are the real political frames, not abstract humanity.",
      individualism:
        "Collective-leaning — family, faith, and community are prior to the individual and give life its meaning.",
      order:
        "Some designed reform (industrial policy, family policy, antitrust) within an inherited constitutional tradition — reformist not blank-slate.",
      authority:
        "Elite-populist — national conservative technocracy plus a claim to speak for the forgotten working class.",
      temporal:
        "Declinist — ***Hillbilly Elegy*** is a post-industrial decline diagnosis; the task is restoration, not further liberal 'progress.'",
    },
    influences: [
      "Patrick Deneen — ***Why Liberalism Failed*** as postliberal touchstone",
      "Curtis Yarvin — reportedly cited as influential in podcasts",
      "Rod Dreher — ***The Benedict Option***, cultural conservative retreat",
      "Peter Thiel — political and financial mentor",
      "Catholic social teaching / natural-law tradition",
    ],
    dissents: [
      "Reagan-era fusionism (globalist free trade + open borders)",
      "The neoconservative foreign policy establishment",
      "Silicon Valley + Wall Street elite ideology",
      "Liberal individualism as socially corrosive",
    ],
  },
  {
    name: "Ned Ryun",
    fullName: "Nathaniel \"Ned\" Ryun",
    lifespan: "b. 1973 (Founder/CEO, American Majority; author, ***American Leviathan***)",
    wiki: "https://en.wikipedia.org/wiki/Ned_Ryun",
    axisNotes: {
      epistemology:
        "Objectivist about constitutional and historical truths — ***American Leviathan*** treats the Founders' design as knowable political science; ***Thread of Liberty*** frames the American founding as the culmination of a knowable Western tradition.",
      anthropology:
        "Skeptical without total pessimism — unelected bureaucrats predate when unchecked, but ordinary citizens are basically capable when given the tools; the Leviathan metaphor is anthropological as much as political.",
      politicalOntology:
        "Extreme realist — \"policy without power is worthless.\" The signature attack on \"Conservatism, Inc.\" is that it produces think-tank chatter instead of political victories.",
      universalism:
        "America-first constitutional restorationist — the mission is restoring *this* Republic, not building abstract universal justice. The ***Thread of Liberty*** tagline is \"Keeping Our Republic.\"",
      individualism:
        "Founders' natural-rights individualism against the collectivism of the administrative state — but organized in a trained movement, not atomized libertarianism.",
      order:
        "Devolve and break apart the centralized administrative Leviathan; power belongs at the local and state level where organic accountability lives. Constitutional foundations designed; everything above them emergent.",
      authority:
        "Cadre-training theory — ***American Majority*** trains an organized minority (candidates, activists) because the disorganized many can't beat Leviathan alone. Machiavellian and Hyde-adjacent on this axis.",
      temporal:
        "Strongly declinist — Progressive-era statists at the turn of the 20th century subverted the Founders' Republic; the task is restoration, not further \"progress.\" ***Restoring Our Republic*** is the title as thesis.",
    },
    influences: [
      "The American Founders — Madison, Hamilton, Jefferson, ***The Federalist Papers***",
      "Alexis de Tocqueville — ***Democracy in America*** as the framing device of ***Thread of Liberty***",
      "Thomas Hobbes — ***Leviathan*** imagery inverted (Hobbes's monster used against Hobbes's own conclusion)",
      "Michael Farris / HSLDA — through Ned's early directorship of Generation Joshua (2004–2007)",
      "Larry Arnn + the Claremont / Hillsdale intellectual world — via the 1776 Commission",
    ],
    dissents: [
      "\"Conservatism, Inc.\" — think-tanks that produce ideas without operational political power",
      "The Progressive-era administrative state (Wilson, Croly, Dewey) — the villain of ***American Leviathan***",
      "Establishment Republican consultant class — \"Republicans need to find a backbone\"",
      "Libertarian purity-vote strategy — respects Rand Paul / Thomas Massie's principles but rejects their theory of change",
    ],
  },
  {
    name: "Hillary Clinton",
    fullName: "Hillary Rodham Clinton",
    lifespan: "b. 1947 (former Secretary of State, Senator, First Lady)",
    image: "/thinkers/hillary.jpg",
    wiki: "https://en.wikipedia.org/wiki/Hillary_Clinton",
    axisNotes: {
      epistemology:
        "Technocratic-liberal empiricism — evidence-based policy, wonk credibility, expertise as knowable and dispositive; ***It Takes a Village*** and ***Living History*** are policy autobiographies.",
      anthropology:
        "Liberal optimism with realistic caution — people are basically decent, but institutions have to work for them.",
      politicalOntology:
        "Mixed — moralist rhetoric ('stronger together,' human rights) atop realist coalition-building and hardball electoral tactics.",
      universalism:
        "Universalist liberal internationalist — human rights as a universal standard, ***women's rights are human rights*** as global claim.",
      individualism:
        "Individual rights within a liberal welfare state — persons flourish through opportunity structures.",
      order:
        "Technocratic design — comprehensive policy programs (healthcare, climate) developed with experts and delivered through institutions.",
      authority:
        "Institutional elite — 'ready on day one,' credentialed governance, insider expertise.",
      temporal:
        "Progressive — 'the arc of history bends toward justice' framing, expanded through generational reform.",
    },
    influences: [
      "The Methodist social gospel tradition (Wesley's 'do all the good you can')",
      "Saul Alinsky — her senior thesis at Wellesley was on him",
      "Bill Clinton and the New Democrat / DLC framework",
      "Second-wave feminism (Steinem, Friedan)",
      "The Children's Defense Fund / Marian Wright Edelman",
    ],
    dissents: [
      "The Republican Right generally (from the 'vast right-wing conspiracy' onward)",
      "Bernie Sanders / DSA left as 'purity politics' that lets the right win",
      "Trumpism and populism from the right",
      "Anti-globalist, anti-institutional politics broadly",
    ],
  },
  {
    name: "Kamala Harris",
    fullName: "Kamala Harris",
    lifespan: "b. 1964 (former US Vice President; 2024 Democratic nominee)",
    image: "/thinkers/harris.jpg",
    wiki: "https://en.wikipedia.org/wiki/Kamala_Harris",
    axisNotes: {
      epistemology:
        "Liberal-institutional truth-claims + prosecutorial framing — evidence, rule of law, expert consensus as authoritative.",
      anthropology:
        "Liberal optimism — people are basically decent; systems, not human nature, are the problem.",
      politicalOntology:
        "Moralist framing dominant — 'freedom, opportunity, dignity' as political ends; ***The Truths We Hold*** frames politics ethically.",
      universalism:
        "Universalist liberal — global human rights, democratic norms, international institutions.",
      individualism:
        "Individual rights within a liberal welfare frame — Democratic-liberal individualism plus safety net.",
      order:
        "Designed institutional policy — signature initiatives (opportunity economy, judicial reform) built through executive and legislative structure.",
      authority:
        "Institutional elite — prosecutorial career, Senate seniority, executive branch.",
      temporal:
        "Progressive — history moves through institutional reform toward greater inclusion.",
    },
    influences: [
      "Thurgood Marshall / the civil-rights legal tradition",
      "Willie Brown — early political mentor",
      "The Congressional Black Caucus / historically Black colleges tradition (Harris attended Howard)",
      "The California Democratic Party establishment",
      "Progressive prosecutor movement (with tensions — she's a former prosecutor with a mixed record on it)",
    ],
    dissents: [
      "MAGA populism and Trumpism",
      "Republican voter-suppression legislation",
      "The unregulated fossil-fuel and tech industries",
      "Right-wing 'freedom' rhetoric that she frames as freedom-from-restraint-only",
    ],
  },
  {
    name: "FDR",
    fullName: "Franklin D. Roosevelt",
    lifespan: "1882–1945 (32nd US President)",
    image: "/thinkers/fdr.jpg",
    wiki: "https://en.wikipedia.org/wiki/Franklin_D._Roosevelt",
    axisNotes: {
      epistemology:
        "Pragmatist — 'try something, and if it fails, admit it frankly and try another' (Oglethorpe address); truth is what works experimentally.",
      anthropology:
        "Optimistic about the American worker organized — 'the only thing we have to fear is fear itself.'",
      politicalOntology:
        "Realist about power (court-packing, coalition-building, hardball politics) inside a moralist New Deal frame.",
      universalism:
        "Post-war universalism — the ***Four Freedoms*** speech and the Atlantic Charter set up global liberal order.",
      individualism:
        "Mixed — individual dignity as end, but collective welfare and social insurance as necessary means.",
      order:
        "Maximally designed — alphabet-soup agencies (NRA, WPA, SEC, Social Security, TVA) as constructivist national program.",
      authority:
        "Patrician-democratic — a Hudson Valley aristocrat governing in the name of the common man.",
      temporal:
        "Progressive — the New Deal as forward march; the Second Bill of Rights speech projects further progress.",
    },
    influences: [
      "Theodore Roosevelt — his cousin; Square Deal / progressive republicanism",
      "Woodrow Wilson — Progressive-era administrative state, Wilson's cabinet",
      "Louis Brandeis — 'curse of bigness,' antitrust liberalism",
      "John Maynard Keynes — deficit spending as counter-cyclical tool",
      "Frances Perkins and the settlement-house / social-work tradition",
    ],
    dissents: [
      "The 'economic royalists' of the ***1936 acceptance speech***",
      "The pre-New Deal Republican economic orthodoxy (Hoover)",
      "Isolationism (in the run-up to WWII)",
      "Fascism and militarism abroad; Nazism explicitly",
    ],
  },
  {
    name: "Coolidge",
    fullName: "Calvin Coolidge",
    lifespan: "1872–1933 (30th US President)",
    image: "/thinkers/coolidge.jpg",
    wiki: "https://en.wikipedia.org/wiki/Calvin_Coolidge",
    axisNotes: {
      epistemology:
        "Classical liberal — constitutional truths and the wisdom of the Founders as knowable and authoritative; ***Autobiography*** treats principles as settled.",
      anthropology:
        "Neutral to mildly optimistic — self-reliance premises basic capability, but restraint of ambition is a virtue.",
      politicalOntology:
        "Constitutional realism with moral framing — 'the business of America is business' but grounded in a moral order.",
      universalism:
        "American particularism with classical-liberal universal principles — the American tradition as best expression of the universal.",
      individualism:
        "Rugged individualism — the self-reliant citizen and small business as the political unit.",
      order:
        "Traditionalist — 'if you see ten troubles coming down the road, you can be sure that nine will run into the ditch before they reach you.' Restraint, not design.",
      authority:
        "Constitutional-restrained democratic — presidential minimalism, taciturn ('Silent Cal').",
      temporal:
        "Mildly declinist about Progressive-era expansion of government; more preservationist than restorationist.",
    },
    influences: [
      "The New England Puritan / Congregationalist tradition",
      "Charles Garman — his moral-philosophy professor at Amherst",
      "The classical liberal tradition (Adam Smith, Bastiat)",
      "Republican Party small-government orthodoxy (McKinley, Harding)",
      "Alexander Hamilton on sound money and commerce",
    ],
    dissents: [
      "Progressive-era regulatory expansion (T. Roosevelt / Wilson strand)",
      "Bryan-populist agrarian radicalism",
      "The 'organized minorities' seeking government favors",
      "Union militancy as a threat to public order (Boston police strike)",
    ],
  },
  {
    name: "Reagan",
    fullName: "Ronald Reagan",
    lifespan: "1911–2004 (40th US President)",
    image: "/thinkers/reagan.jpg",
    wiki: "https://en.wikipedia.org/wiki/Ronald_Reagan",
    axisNotes: {
      epistemology:
        "Fusionist certainties — freedom, tradition, and anti-communism as knowable truths; the ***A Time for Choosing*** speech treats them as morally settled.",
      anthropology:
        "Optimistic — 'morning in America,' the essential goodness of the American people freed from bureaucratic restraint.",
      politicalOntology:
        "Mixed realist / moralist — the 'evil empire' speech is moralist; Cold War strategy and coalition politics are hard realist.",
      universalism:
        "American exceptionalism as universal liberty model — the 'shining city on a hill' is offered to the world.",
      individualism:
        "Reaganite individualism — the entrepreneur, the small businessperson, the taxpayer as heroic units.",
      order:
        "Traditionalist — 'government is not the solution to our problem; government is the problem'; skepticism of designed federal expansion.",
      authority:
        "Populist-conservative — 'the government of the people' against the coastal elites and bureaucrats.",
      temporal:
        "Mixed — restorationist ('to make America great again') plus progressive American greatness narrative.",
    },
    influences: [
      "Barry Goldwater — ***The Conscience of a Conservative***; Reagan's ***A Time for Choosing*** was for Goldwater",
      "Whittaker Chambers — ***Witness*** as anti-communist testament",
      "William F. Buckley Jr. and the ***National Review*** fusionism",
      "Milton Friedman — market economics as freedom",
      "Frank Meyer — fusionist synthesis of tradition and liberty",
    ],
    dissents: [
      "The Soviet Union — the whole strategic project",
      "New Deal / Great Society liberalism as bureaucratic overreach",
      "Détente as moral equivocation (dissent from Nixon-Kissinger on this)",
      "The libertarian purists who wanted actual government rollback (Reagan governed more moderately than he ran)",
    ],
  },
  {
    name: "Biden",
    fullName: "Joe Biden",
    lifespan: "b. 1942 (46th US President)",
    image: "/thinkers/biden.jpg",
    wiki: "https://en.wikipedia.org/wiki/Joe_Biden",
    axisNotes: {
      epistemology:
        "Catholic-liberal moral certainties + institutional-consensus empiricism — evidence and norms as authoritative.",
      anthropology:
        "Optimistic institutionalist — 'we're the United States of America,' recovery through unity and empathy.",
      politicalOntology:
        "Moralist-framed institutional politics — 'battle for the soul of the nation'; realist maneuvering in service of normative liberal ends.",
      universalism:
        "Liberal internationalist — reinvigorated NATO, democracy-vs-autocracy framing, human-rights rhetoric.",
      individualism:
        "New Deal-adjacent liberal — the individual with a strong safety net, not the atomized market self.",
      order:
        "Designed institutional restoration — Build Back Better, CHIPS Act, IRA as coherent designed programs.",
      authority:
        "Institutional elite — Senate insider, career political operator, executive-branch experience.",
      temporal:
        "Mostly progressive — 'better days are ahead' rhetoric, plus a strong preservationist strand ('democracy on the ballot').",
    },
    influences: [
      "Catholic social teaching (labor rights, family, dignity of the person)",
      "Ted Kennedy and Senate liberalism",
      "Barack Obama — direct partnership and ideological continuity",
      "Amtrak and the working-class Delaware/Scranton identity as political frame",
      "The Democratic Party institutional consensus, moved leftward by his coalition",
    ],
    dissents: [
      "MAGA / Trumpism as an existential threat to democracy",
      "The Republican Party's post-Reagan trajectory",
      "Authoritarian regimes globally (Putin, Xi framed as adversaries)",
      "Both progressive-purity ('no billionaires should exist') and libertarian ('drown government in the bathtub') fringes",
    ],
  },

  // ---- Relative-truth pole ----
  {
    name: "Foucault",
    fullName: "Michel Foucault",
    lifespan: "1926–1984",
    image: "/thinkers/foucault.jpg",
    wiki: "https://en.wikipedia.org/wiki/Michel_Foucault",
    axisNotes: {
      epistemology:
        "Extreme perspectivist — ***The Archaeology of Knowledge*** and ***Discipline and Punish*** treat 'truth' as an effect of power/knowledge regimes, never a view from above.",
      anthropology:
        "The subject is constituted by discourse and disciplinary practice — no essential human nature, only historically produced humans.",
      politicalOntology:
        "Politics is power all the way down, but power operates through capillary techniques (surveillance, normalization) more than sovereign force.",
      universalism:
        "Radically particularist — universal humanism is itself a modern discursive formation to be interrogated, not a ground.",
      individualism:
        "The individual is a product of specific power/knowledge regimes; there is no pre-political self to defend.",
      order:
        "Order emerges from micro-practices (schools, clinics, prisons); large-scale design is less real than the everyday techniques that produce compliance.",
      authority:
        "Suspicious of every claim to legitimate authority — even resistance produces its own micro-powers.",
      temporal:
        "Genealogy over history — no progress narrative, but not classic declinism either; every era has its own regime.",
    },
    influences: [
      "Nietzsche — perspectivism and genealogy",
      "Heidegger — being-in-the-world",
      "Georges Canguilhem — history of science",
      "Louis Althusser — briefly, structural Marxism",
      "The French tradition of critique (Bachelard, Hyppolite)",
    ],
    dissents: [
      "Marxist orthodoxy on the primacy of economic base",
      "Sartrean existential humanism",
      "Enlightenment universalism and liberal humanism",
      "The idea of a stable, pre-discursive subject",
    ],
  },
  {
    name: "Rorty",
    fullName: "Richard Rorty",
    lifespan: "1931–2007",
    axisNotes: {
      epistemology:
        "Anti-foundationalist — ***Philosophy and the Mirror of Nature*** attacks the whole 'representing reality' picture; truth is what your community accepts, not correspondence to a real world.",
      anthropology:
        "Mildly optimistic — contingent human solidarity is possible without metaphysical grounds, as ***Contingency, Irony, and Solidarity*** argues.",
      politicalOntology:
        "Politics has moral content but no transcendental grounding — 'bourgeois liberalism' is a practical achievement, not a discovery.",
      universalism:
        "Rejects transcendental universals; embraces a 'we liberals' solidarity that is culturally specific but expanding.",
      individualism:
        "Private irony + public solidarity — individuals cultivate their own vocabularies privately, cooperate liberally in public.",
      order:
        "Bourgeois liberalism as a practical, iterative achievement — designed within limits, but no blueprint utopia.",
      authority:
        "Democratic-liberal — the reformer with a pen and a novel, not the vanguardist or the philosopher-king.",
      temporal:
        "Mild progressive — liberalism improves through poetry, reform, and expanding solidarity.",
    },
    influences: [
      "John Dewey — American pragmatism, ***Democracy and Education***",
      "Ludwig Wittgenstein — language games in the ***Philosophical Investigations***",
      "Martin Heidegger and Derrida — the linguistic turn",
      "Charles Sanders Peirce and William James — pragmatism",
      "Whitman and Emerson — democratic vistas as poetic tradition",
    ],
    dissents: [
      "Analytic philosophy's project of getting language to 'mirror' nature",
      "Marxist and postmodern radicalism — both, from opposite directions, as insufficiently liberal",
      "The academic left's abandonment of reformist politics for cultural purity (***Achieving Our Country***)",
      "Theological and metaphysical foundations for politics",
    ],
  },
  {
    name: "Dewey",
    fullName: "John Dewey",
    lifespan: "1859–1952",
    image: "/thinkers/dewey.jpg",
    wiki: "https://en.wikipedia.org/wiki/John_Dewey",
    axisNotes: {
      epistemology:
        "Pragmatist — truth is what emerges from inquiry, tested by consequences; ***Logic: The Theory of Inquiry*** works this out systematically.",
      anthropology:
        "Optimistic about educated citizens — humans grow through habit, experience, and reflective intelligence when given the conditions.",
      politicalOntology:
        "Democracy is a way of life, not just a form of government — ***Democracy and Education*** interweaves ethics and politics.",
      universalism:
        "Liberal-democratic method is broadly applicable but attentive to context; not a fixed doctrine but a pattern of inquiry.",
      individualism:
        "Individual growth as end + community as necessary condition — no atomistic individualism, no dissolution of the person.",
      order:
        "Designed but iterative — education, planning, and social reform as continuous experimentation.",
      authority:
        "Radically democratic — publics form themselves around problems; expertise serves inquiry, doesn't replace it.",
      temporal:
        "Progressive — inquiry and education accumulate; ***The Public and Its Problems*** projects a growing capacity for democratic self-organization.",
    },
    influences: [
      "William James — pragmatist psychology and 'radical empiricism'",
      "Charles Sanders Peirce — pragmatic maxim",
      "Hegel — early influence he later reworked pragmatically",
      "Jane Addams and the Hull House settlement tradition",
      "Charles Darwin — evolutionary continuity of intelligence",
    ],
    dissents: [
      "Cartesian dualism and 'spectator' theories of knowledge",
      "Absolute idealism (the Hegel he outgrew)",
      "Rigid Marxist orthodoxy and totalitarian political forms",
      "Walter Lippmann's technocratic elitism (***The Public and Its Problems*** is partly a reply)",
    ],
  },
  {
    name: "William James",
    fullName: "William James",
    lifespan: "1842–1910",
    image: "/thinkers/james.jpg",
    wiki: "https://en.wikipedia.org/wiki/William_James",
    axisNotes: {
      epistemology:
        "Pragmatism — 'truth is what works' in the widest sense; ***Pragmatism*** and ***The Meaning of Truth*** develop the doctrine.",
      anthropology:
        "Optimistic about human variety and effort — ***The Varieties of Religious Experience*** treats persons as capable of transformation.",
      politicalOntology:
        "Political ontology is thin — James is more moral psychologist than political theorist, though his individualism has political implications.",
      universalism:
        "Pluralist — allows for many types of experience and truth, without a single universal frame.",
      individualism:
        "Individualist — the person's free will and unique experience are the fundamental data.",
      order:
        "Naturalist, less concerned with political design; order emerges from the varieties of human commitment.",
      authority:
        "Democratic and anti-authoritarian in temperament, though his political writings are limited.",
      temporal:
        "Mildly progressive — meliorism (the world can be made better) without guarantee of progress.",
    },
    influences: [
      "Charles Sanders Peirce — coined pragmatism (James credited him)",
      "Henri Bergson — élan vital, philosophy of life",
      "Emerson and the New England transcendentalists (via family)",
      "Wilhelm Wundt and the experimental psychology tradition",
      "Gustav Fechner — psychophysics",
    ],
    dissents: [
      "Absolute idealism (Bradley, Royce)",
      "Rigid materialism and reductive determinism",
      "The 'block universe' of Spinoza and Hegel — James insisted the world is genuinely open",
      "Doctrinaire monism of any stripe",
    ],
  },
  {
    name: "Sorel",
    fullName: "Georges Sorel",
    lifespan: "1847–1922",
    image: "/thinkers/sorel.jpg",
    wiki: "https://en.wikipedia.org/wiki/Georges_Sorel",
    axisNotes: {
      epistemology:
        "Political myth mobilizes — truth in politics is what moves masses, not what corresponds to fact; ***Reflections on Violence*** is the founding text.",
      anthropology:
        "Skeptical of bourgeois rationalism; humans require heroic myth to act politically at all.",
      politicalOntology:
        "Extreme realist about political myth and violence as constitutive of the political.",
      universalism:
        "Particularist — myths mobilize particular peoples in particular struggles; no universal political rationality.",
      individualism:
        "Collectivist — the general strike is heroic mass action, not liberal individual choice.",
      order:
        "Ambiguous — myths create order but Sorel is skeptical of designed institutions; the strike itself is the form.",
      authority:
        "Syndicalist workers' councils, anti-parliamentary; deeply hostile to bourgeois liberal-democratic authority.",
      temporal:
        "Skeptical of progress — heroic pessimism about bourgeois civilization; myth-driven regeneration.",
    },
    influences: [
      "Marx — but read through Bergson and Nietzsche, not through orthodox materialism",
      "Nietzsche on heroic vitality",
      "Henri Bergson on intuition and vital energy",
      "Proudhon on federalism and workers' autonomy",
      "Vico on cyclical history and myth",
    ],
    dissents: [
      "Bourgeois parliamentary democracy and its 'illusions'",
      "Orthodox Marxist scientific socialism",
      "Reformist social democracy (the Jaurès wing)",
      "Enlightenment rationalism as demobilizing",
    ],
  },
  {
    name: "Horkheimer",
    fullName: "Max Horkheimer",
    lifespan: "1895–1973",
    image: "/thinkers/horkheimer.jpg",
    wiki: "https://en.wikipedia.org/wiki/Max_Horkheimer",
    axisNotes: {
      epistemology:
        "Critical theory turns Enlightenment reason on itself — ***Dialectic of Enlightenment*** (with Adorno) shows how reason becomes an instrument of domination.",
      anthropology:
        "Pessimistic — mass psychology under capitalism produces authoritarian personalities and repressed subjects.",
      politicalOntology:
        "Politics reduces to critique of a total cultural-economic system; there is no autonomous political sphere to defend.",
      universalism:
        "Residual Marxist universalism — universal emancipation as the goal, though history has betrayed it.",
      individualism:
        "The individual is being liquidated by the culture industry; critical concern for autonomy remains, but it is threatened.",
      order:
        "Critical theory implies a designed transformation, though Horkheimer is characteristically cautious about naming its content.",
      authority:
        "Democratic in principle, elitist in cultural judgment; deeply suspicious of both mass culture and vanguardist authoritarianism.",
      temporal:
        "Declinist about actual history despite theoretical hope — the Enlightenment project has turned against itself.",
    },
    influences: [
      "Marx and Hegel — the base of critical theory",
      "Schopenhauer — pessimism as method",
      "Freud — mass psychology, the authoritarian personality",
      "Weber on rationalization and disenchantment",
      "The early Lukács of ***History and Class Consciousness***",
    ],
    dissents: [
      "Orthodox Marxist optimism about the proletariat",
      "Positivism in the social sciences (the ***Positivism Dispute***)",
      "Nazism, Stalinism, and mass culture as three faces of the same domination",
      "Traditional metaphysics as ideology",
    ],
  },
  {
    name: "Adorno",
    fullName: "Theodor W. Adorno",
    lifespan: "1903–1969",
    image: "/thinkers/adorno.jpg",
    wiki: "https://en.wikipedia.org/wiki/Theodor_W._Adorno",
    axisNotes: {
      epistemology:
        "Negative dialectics — ***Negative Dialectics*** attacks 'identity thinking'; truth is what resists conceptual capture, never a positive doctrine.",
      anthropology:
        "Post-Auschwitz pessimism — humans have shown themselves capable of anything; 'after Auschwitz, to write poetry is barbaric.'",
      politicalOntology:
        "Culturalist reduction — the culture industry produces subjects the way factories produce commodities; politics is downstream.",
      universalism:
        "Residual Marxist universalism, but deeply particular in cultural analysis — universals are usually covers for domination.",
      individualism:
        "The individual has been liquidated by the culture industry; ***Minima Moralia*** is a mourning for its remnants.",
      order:
        "Theoretical negation implies eventual construction, but Adorno never says what — determinate negation is the whole method.",
      authority:
        "Democratic but suspicious of mass culture and popular taste; the intellectual as critical remainder.",
      temporal:
        "Strongly declinist — the whole ***Dialectic of Enlightenment*** frames modernity as regression.",
    },
    influences: [
      "Marx and Hegel — dialectical inheritance",
      "Walter Benjamin — closest friend and theoretical ally",
      "Arnold Schoenberg — musical modernism as theoretical model",
      "Freud on psychoanalysis of culture",
      "Kierkegaard — negative theology as method (Adorno's dissertation)",
    ],
    dissents: [
      "Jazz and mass-produced popular music — famously (and controversially) attacked",
      "Existentialism (***The Jargon of Authenticity*** attacks Heideggerian language)",
      "Positivism in the social sciences",
      "The student movement's activist demands (Adorno's final years included a tense break with radicalizing students)",
    ],
  },

  // ---- Older non-subject thinkers, now clickable ----
  {
    name: "Lenin",
    fullName: "Vladimir Lenin",
    lifespan: "1870–1924",
    image: "/thinkers/lenin.jpg",
    wiki: "https://en.wikipedia.org/wiki/Vladimir_Lenin",
    axisNotes: {
      epistemology:
        "Dialectical materialism as science — ***What Is to Be Done?*** and ***Materialism and Empirio-Criticism*** treat Marxism as demonstrably true.",
      anthropology:
        "Workers develop trade-union consciousness naturally but socialist consciousness only via the vanguard — humans need theoretical instruction.",
      politicalOntology:
        "Realist tactics welded to materialist theory; ***State and Revolution*** treats the state as an instrument of class rule.",
      universalism:
        "Universalist — workers of the world; the revolution is global in principle even where forced to start in one country.",
      individualism:
        "Collectivist — the class and the party are the historical agents; individual liberation waits for the classless society.",
      order:
        "Maximally designed — the vanguard party, planned economy, and revolutionary state as constructed instruments.",
      authority:
        "Vanguardist — the professional revolutionary cadre leads workers who cannot lead themselves.",
      temporal:
        "Strongly progressive — history moves through determinate stages toward communism.",
    },
    influences: [
      "Marx and Engels — the foundation",
      "Nikolai Chernyshevsky — the title of ***What Is to Be Done?*** is borrowed from his novel",
      "Georgi Plekhanov — Russian Marxism's founding theorist",
      "Kautsky — early influence, later renounced",
      "The Russian revolutionary tradition (Herzen, the Narodniks) as negative reference",
    ],
    dissents: [
      "Economism and 'spontaneism' — attacked in ***What Is to Be Done?***",
      "Bernstein and revisionist social democracy",
      "The Mensheviks after the 1903 split",
      "Kautsky as 'the renegade' after 1914 (***The Proletarian Revolution and the Renegade Kautsky***)",
      "Anarchism (Bakunin, Kropotkin) as bourgeois individualism",
    ],
  },
  {
    name: "Alinsky",
    fullName: "Saul Alinsky",
    lifespan: "1909–1972",
    image: "/thinkers/alinsky.jpg",
    wiki: "https://en.wikipedia.org/wiki/Saul_Alinsky",
    axisNotes: {
      epistemology:
        "Pragmatist — ***Rules for Radicals*** insists ideology is the enemy of organizing; truth is what works in the concrete situation.",
      anthropology:
        "Neutral / realistic — people respond to interests and pressure; not naive optimism, not paranoid pessimism.",
      politicalOntology:
        "Pure realist — the political IS the mobilization of pressure, the freezing of targets, the ridicule of the powerful.",
      universalism:
        "Quasi-universal — the 'have-nots' are a broad category, but tactics adapt to specific communities.",
      individualism:
        "Collectivist — organized communities acting on their interests, not individuals petitioning liberally.",
      order:
        "Emergent — tactical response to what's there, not blueprint design; the organizer works with the community as found.",
      authority:
        "Populist — the mass organization against the entrenched power, though the professional organizer plays a distinct role.",
      temporal:
        "Mildly progressive — the have-nots can win, one pressure campaign at a time.",
    },
    influences: [
      "John L. Lewis and the CIO industrial organizing tradition",
      "Machiavelli — ***Rules for Radicals*** opens by naming ***The Prince*** as the model for the Haves",
      "Chicago's Back-of-the-Yards experience (his first organizing site)",
      "Jacques Maritain — Catholic personalist correspondent and intellectual friend",
      "Lenin as a pragmatist (Alinsky quotes him without adopting the ideology)",
    ],
    dissents: [
      "Ideological purity of any kind — his opening is a critique of 'true believers'",
      "The naive belief that being right will win against being organized",
      "Bureaucratic social workers 'organizing' from above without listening",
      "Rothbardian / libertarian atomism as unable to build collective power",
    ],
  },
  {
    name: "Richardson",
    fullName: "H. L. Richardson",
    lifespan: "1927–2020 (California State Senator; founder of Gun Owners of America)",
    image: "/thinkers/richardson.jpg",
    wiki: "https://en.wikipedia.org/wiki/H._L._Richardson",
    axisNotes: {
      epistemology:
        "Moral realism inside American constitutional tradition — ***Confrontational Politics*** treats power dynamics and moral principles as both knowable.",
      anthropology:
        "Skeptical about opponents — the left is not misguided but organized and hostile; ordinary people are decent when defended by organized allies.",
      politicalOntology:
        "Politics is the adjudication of power — realist ontology directly borrowed from Alinsky's tactics, reoriented against left institutional dominance.",
      universalism:
        "Particularist — the American constitutional tradition, American liberty, American communities as the frame.",
      individualism:
        "Individualist — Second Amendment individual right, liberty as personal, Lockean frame.",
      order:
        "Works within inherited constitutional order plus a designed tactical training layer — moderate constructivism.",
      authority:
        "Populist grassroots + constitutional-elected officials — mass organization channeling to formal power.",
      temporal:
        "Mildly declinist — the culture has been captured and needs recovering; ***Confrontational Politics*** frames this as a recoverable situation.",
    },
    influences: [
      "Saul Alinsky — the ***underlying master*** per Daniel's own vault; ***Rules for Radicals*** ported to the right",
      "The Reagan-era conservative movement",
      "The Founders and American constitutional tradition",
      "Frank Meyer / William F. Buckley Jr. — fusionist conservatism",
      "The Gun Owners of America movement he built",
    ],
    dissents: [
      "The 'silent majority' theory — silence loses to organization",
      "Country-club Republicans who won't fight",
      "Left institutional dominance in universities, media, courts",
      "Gun control in every form",
    ],
  },
  {
    name: "Rothfeld",
    fullName: "Mike Rothfeld",
    lifespan: "American conservative political operator and trainer (Saber Communications)",
    axisNotes: {
      epistemology:
        "Concrete moral realism — political truth is knowable and refusing to see it is a moral failing.",
      anthropology:
        "Skeptical realism — trained cadre can do great things; untrained masses drift or get captured.",
      politicalOntology:
        "The load-bearing line: ***politics is the adjudication of power***. Every training curriculum starts here.",
      universalism:
        "Particularist — American conservative movement building, not a universal political theory.",
      individualism:
        "Individualist — trained operators as autonomous agents defending individual liberty.",
      order:
        "Cadre training is a designed layer atop the inherited constitutional order.",
      authority:
        "Elite-cadre — a trained operator class matters more than the disorganized mass, though the mass is where legitimacy ultimately lives.",
      temporal:
        "Declinist — the movement needs to restore what has been lost, not build something new.",
    },
    influences: [
      "H. L. Richardson — ***Confrontational Politics*** as core training text",
      "Saul Alinsky — indirectly via Richardson, directly for tactics",
      "Direct-mail conservative fundraising tradition (Viguerie, Weyrich)",
      "The National Right to Work Committee and adjacent movement institutions",
      "YAL's Student Rights Coalition / FACL training pipeline he helped shape",
    ],
    dissents: [
      "Movement conservatives who won't do the tactical work",
      "Purity-testing that fragments coalitions",
      "The idea that policy alone (without power) matters",
      "Progressive institutional capture as a fait accompli",
    ],
  },
  {
    name: "Rawls",
    fullName: "John Rawls",
    lifespan: "1921–2002",
    image: "/thinkers/rawls.jpg",
    wiki: "https://en.wikipedia.org/wiki/John_Rawls",
    axisNotes: {
      epistemology:
        "Procedural-constructivist truth — ***A Theory of Justice*** derives principles behind a veil of ignorance; truth is what parties would rationally agree to, not what corresponds to a moral reality.",
      anthropology:
        "Rational optimism — persons are capable of moral autonomy and mutual respect under fair conditions.",
      politicalOntology:
        "Politics is applied justice — ***Political Liberalism*** treats political theory as public reason, distinct from but derivative of moral theory.",
      universalism:
        "Strongly universalist — the principles of justice apply to any well-ordered society; ***The Law of Peoples*** extends to international relations.",
      individualism:
        "Individualist — persons behind the veil are the units; the difference principle protects the worst-off individual.",
      order:
        "Ideal-theory constructivism at its purest — the original position is a designed thought-experiment for a designed just society.",
      authority:
        "Constitutional-democratic — public reason binds citizens as equals; not populist, not vanguardist.",
      temporal:
        "Progressive — a well-ordered society is achievable through reason and reform.",
    },
    influences: [
      "Kant — the categorical imperative as background for the original position",
      "Rousseau on the social contract",
      "H. L. A. Hart on legal positivism",
      "John Locke — natural rights and consent tradition",
      "The Oxford / Harvard analytic philosophy tradition (his teachers)",
    ],
    dissents: [
      "Utilitarianism (aggregate welfare over individual rights)",
      "Libertarianism as neglect of the least advantaged (Nozick's ***Anarchy, State, and Utopia*** is the direct reply back)",
      "Communitarian critiques (Sandel, MacIntyre) — Rawls's later work partly responds",
      "Rational-choice reductions of moral principles",
    ],
  },
  {
    name: "de Benoist",
    fullName: "Alain de Benoist",
    lifespan: "b. 1943 (French philosopher; ***Nouvelle Droite***)",
    image: "/thinkers/debenoist.jpg",
    wiki: "https://en.wikipedia.org/wiki/Alain_de_Benoist",
    axisNotes: {
      epistemology:
        "Truth is embedded in specific peoples and cultures — ***Manifesto for a European Renaissance*** treats each civilization as its own frame.",
      anthropology:
        "Skeptical of Enlightenment optimism about the abstract individual; humans are formed by particular cultures.",
      politicalOntology:
        "Culturalist-realist — culture (identity, myth, tradition) is upstream of politics; the ***Nouvelle Droite*** built the strategy on this.",
      universalism:
        "Extreme particularist — universalism itself is a specific Western modern ideology to be resisted; each people its own path.",
      individualism:
        "Collective — peoples, ethno-cultural communities, and rooted traditions over the atomized liberal individual.",
      order:
        "Emergent — inherited culture is the ground; designed states are usually degrading.",
      authority:
        "Organic aristocracy — the natural elite of a rooted people, not the technocratic managerial class.",
      temporal:
        "Strongly declinist — modern Europe in civilizational decline; the task is metapolitical restoration.",
    },
    influences: [
      "Nietzsche — perspectivism, will to power, aristocratic radicalism",
      "Carl Schmitt — friend/enemy and the political",
      "Antonio Gramsci — the ***Nouvelle Droite*** is explicit Gramscianism from the right",
      "Julius Evola — traditionalist philosophy",
      "Georges Dumézil — comparative Indo-European studies",
    ],
    dissents: [
      "Enlightenment universalism as European ethnocide",
      "American liberal-democratic capitalism as civilizational dissolvent",
      "Christianity as an imported universalism onto European particularity",
      "Egalitarianism as flattening rooted difference",
    ],
  },
  {
    name: "Aquinas",
    fullName: "Thomas Aquinas",
    lifespan: "1225–1274",
    image: "/thinkers/aquinas.jpg",
    wiki: "https://en.wikipedia.org/wiki/Thomas_Aquinas",
    axisNotes: {
      epistemology:
        "Natural law is knowable by reason; divine law confirms it — ***Summa Theologiae*** treats moral and political truths as demonstrable.",
      anthropology:
        "Fallen but graced — humans have real natural inclinations to the good, corrupted by sin but restorable by grace.",
      politicalOntology:
        "Politics reduces to the natural and divine order — the ***Treatise on Law*** ranks eternal, natural, human, and divine law.",
      universalism:
        "Strong universalist — natural law binds all rational creatures; the ***Summa*** addresses all humanity.",
      individualism:
        "The common good weighted over individual preference, though persons have dignity as ends made in the divine image.",
      order:
        "Designed by God, articulated by reason, and administered through human law — rational construction within a natural frame.",
      authority:
        "Legitimate earthly authority under divine sanction; the ruler serves natural law and can be resisted when he violates it grievously.",
      temporal:
        "Cyclical in the earthly sense (falling and rising kingdoms) but ultimately eschatological — history is oriented toward the beatific vision.",
    },
    influences: [
      "Aristotle — the whole ***Summa*** integrates Aristotelian metaphysics and ethics",
      "Augustine — the prior Christian tradition Aquinas reconciles with reason",
      "Boethius — Christian philosophical form",
      "Averroes and the Islamic Aristotelian tradition",
      "Peter Lombard's ***Sentences*** — the medieval theological curriculum",
    ],
    dissents: [
      "Averroistic 'double truth' (faith and reason as separately true)",
      "Extreme Augustinianism denying reason's autonomy",
      "Manichaean dualism",
      "Political theories treating the state as sufficient unto itself",
    ],
  },
  {
    name: "Yarvin",
    fullName: "Curtis Yarvin",
    lifespan: "b. 1973 (writer; 'Mencius Moldbug')",
    image: "/thinkers/yarvin.jpg",
    wiki: "https://en.wikipedia.org/wiki/Curtis_Yarvin",
    axisNotes: {
      epistemology:
        "Concrete truth about regimes is knowable through clear-eyed history — ***Unqualified Reservations*** treats liberal-democratic self-understanding as a myth to see through.",
      anthropology:
        "Pessimistic — humans require sovereign authority; without it, chaos and 'the cathedral' fill the void.",
      politicalOntology:
        "Institutional realism — politics is who really rules; the 'cathedral' (media + academy + NGO) is the actual sovereign of the current regime.",
      universalism:
        "Particularist about regimes — different peoples suit different forms; no universal liberal-democratic answer.",
      individualism:
        "Individualist under a sovereign — persons flourish when order is clear and predictable, not when politics infects everything.",
      order:
        "Designed monarchy or CEO-style sovereign — deliberate construction over emergent constitutional muddle.",
      authority:
        "Extreme elite — a decisive singular sovereign, not distributed democratic authority.",
      temporal:
        "Strongly declinist — the last 250 years of 'democratic progress' are a decline into cathedral rule; restoration is the task.",
    },
    influences: [
      "Thomas Carlyle — 'Great Man' theory and anti-democratic prose",
      "Hans-Hermann Hoppe — ***Democracy: The God That Failed***",
      "Carl Schmitt — sovereignty and the exception",
      "Bertrand de Jouvenel — ***On Power***",
      "James Burnham — ***The Managerial Revolution***",
    ],
    dissents: [
      "Progressive liberalism as the 'cathedral' regime he analyzes",
      "Conservative electoral politics as impotent within a captured system",
      "Libertarian anarcho-capitalism as unable to hold order",
      "Enlightenment optimism about popular sovereignty",
    ],
  },
  {
    name: "Erasmus",
    fullName: "Desiderius Erasmus",
    lifespan: "1466–1536",
    image: "/thinkers/erasmus.jpg",
    wiki: "https://en.wikipedia.org/wiki/Erasmus",
    axisNotes: {
      epistemology:
        "Christian humanist truth — Scripture, reason, and the classical authors together reveal moral truth; ***Enchiridion*** and the Greek New Testament project.",
      anthropology:
        "Mildly optimistic — humans are educable and can grow morally under Christian humanism.",
      politicalOntology:
        "Politics IS moral formation — ***Education of a Christian Prince*** treats the ruler's virtue as the political question; the exact foil for ***The Prince***.",
      universalism:
        "Universal Christian humanism — all persons under God, all educable by classical and Christian sources.",
      individualism:
        "Individualist — the person as moral agent formed by education, not primarily the collective political body.",
      order:
        "Emergent through education, not revolution — moral formation over generations produces good order.",
      authority:
        "Elite in the sense of the educated Christian prince; but authority is bounded by moral formation and Christian conscience.",
      temporal:
        "Mildly progressive — education can improve humanity; the humanist project is meliorist.",
    },
    influences: [
      "The Church Fathers — especially Jerome, whose Vulgate Erasmus revised",
      "Cicero and Seneca — Roman moral philosophy as background",
      "The Devotio Moderna and Northern Renaissance piety",
      "Sir Thomas More — friend and interlocutor",
      "The Greek New Testament tradition he helped re-open",
    ],
    dissents: [
      "Machiavelli — ***Education of a Christian Prince*** is essentially the anti-***Prince***",
      "Scholastic disputation as sterile ('the ***Praise of Folly*** mocks it)",
      "Both the Papal excesses AND Luther's break — Erasmus tried to hold the middle",
      "Warfare as unchristian folly (***Complaint of Peace***)",
    ],
  },
  {
    name: "Nietzsche",
    fullName: "Friedrich Nietzsche",
    lifespan: "1844–1900",
    image: "/thinkers/nietzsche.jpg",
    wiki: "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
    axisNotes: {
      epistemology:
        "Perspectivism — 'there are no facts, only interpretations' (***The Will to Power***); ***On Truth and Lies in a Nonmoral Sense*** treats truth as a mobile army of metaphors.",
      anthropology:
        "Humans are will-to-power; the herd is small and reactive, higher types are rare — ***Beyond Good and Evil*** is unflinching about this.",
      politicalOntology:
        "Politics is the expression of the vital power of a people or type — pure realist about the political as struggle.",
      universalism:
        "Particularist — noble types, specific peoples, particular cultures over abstract universal humanity.",
      individualism:
        "Extreme individualist — the heroic individual, the Übermensch, the self-overcoming person as the site of value.",
      order:
        "Neither designed nor emergent in political-order terms — Nietzsche's target is more the critique of order itself; life is beyond good and evil.",
      authority:
        "Aristocratic — the higher types over the herd; radical inequality as a condition of any greatness.",
      temporal:
        "Cyclical — eternal recurrence; the pathos of history is being repeated forever, not progressing.",
    },
    influences: [
      "Schopenhauer — will as metaphysical ground (later inverted from pessimism to affirmation)",
      "The Greeks — pre-Socratic vitality and tragic wisdom (***The Birth of Tragedy***)",
      "Wagner — early close friendship, later rupture",
      "Ralph Waldo Emerson — American self-reliance as touchstone",
      "The French moralists (La Rochefoucauld, Montaigne)",
    ],
    dissents: [
      "Christianity as slave morality (***The Antichrist***)",
      "German nationalism, antisemitism, and mass politics (his sister falsified him on this)",
      "Socialism as herd-egalitarianism",
      "Kantian moral universalism",
      "Wagner in his later phase",
    ],
  },
  {
    name: "Buchanan",
    fullName: "Pat Buchanan",
    lifespan: "b. 1938 (American paleoconservative; presidential candidate; commentator)",
    image: "/thinkers/buchanan.jpg",
    wiki: "https://en.wikipedia.org/wiki/Pat_Buchanan",
    axisNotes: {
      epistemology:
        "Christian traditional truth — ***The Death of the West*** treats moral and demographic decline as objectively knowable, historically documented.",
      anthropology:
        "Pessimistic — original sin as background; ordinary people are decent when their institutions hold, but institutions have failed.",
      politicalOntology:
        "Culturalist realist — culture and faith are upstream of politics; power politics understood through the lens of cultural conflict.",
      universalism:
        "Strongly particularist — America First; Western Christian civilization as specific inheritance to defend.",
      individualism:
        "Collective — the nation, the faith, the family; individualism as a solvent when detached from these.",
      order:
        "Emergent traditional — organic inheritance over designed reform; ***Suicide of a Superpower*** frames current elites as designers destroying inherited order.",
      authority:
        "Populist-nationalist — the historic American people over the managerial elite.",
      temporal:
        "Strongly declinist — long cultural, demographic, and spiritual decline requiring restoration.",
    },
    influences: [
      "Richard Nixon — worked in his administration; formative political education",
      "William F. Buckley Jr. and the early ***National Review*** conservatism",
      "James Burnham on the managerial revolution",
      "Sam Francis on Middle American Radicals",
      "The Old Right tradition (Taft, John T. Flynn)",
    ],
    dissents: [
      "Neoconservatism and its wars (***A Republic, Not an Empire***)",
      "Free-trade Republican orthodoxy",
      "Mass immigration as civilizational replacement",
      "Progressive multiculturalism as anti-American",
    ],
  },
  {
    name: "Hyde",
    fullName: "Douglas Hyde",
    lifespan: "1911–1996 (British ex-Communist Catholic organizer)",
    axisNotes: {
      epistemology:
        "Concrete truth-claims from both directions of his conversion — first Communist science, then Catholic natural law; ***Dedication and Leadership*** treats organizing principles as knowable.",
      anthropology:
        "Mixed — humans need discipline, inspiration, and belonging to act; not naive, not cynical.",
      politicalOntology:
        "Realist about organizational power — ***Dedication and Leadership*** teaches conservatives what Communists actually do to build movements.",
      universalism:
        "Universal Catholicism after conversion, but with strong attention to particular movement building.",
      individualism:
        "Collectivist — movement, cadre, and mass action as the unit; not liberal individualism.",
      order:
        "Designed organizational technique — the whole book is a manual for cadre building.",
      authority:
        "Cadre-based — a trained core builds and directs the mass movement.",
      temporal:
        "Mildly progressive — Catholic providentialism with a taste for movement momentum.",
    },
    influences: [
      "The Communist Party of Great Britain (his party of origin)",
      "Lenin's ***What Is to Be Done?*** — cadre-building framework",
      "Catholic social teaching (post-conversion)",
      "Distributism (Chesterton, Belloc)",
      "The Legion of Mary and Catholic organizing traditions",
    ],
    dissents: [
      "Communist atheism and materialism (his reasons for converting)",
      "Amateur, unfocused conservative organizing that loses to disciplined opponents",
      "Passive Christianity that will not build movement institutions",
      "Anti-Communism that does not learn from Communist organizational discipline",
    ],
  },
  {
    name: "Greene",
    fullName: "Robert Greene",
    lifespan: "b. 1959 (American author, strategy)",
    image: "/thinkers/greene.jpg",
    wiki: "https://en.wikipedia.org/wiki/Robert_Greene_(American_author)",
    axisNotes: {
      epistemology:
        "Historical patterns of power are knowable through case-study distillation — ***The 48 Laws of Power***, ***The 33 Strategies of War***, ***The Laws of Human Nature***.",
      anthropology:
        "Cynically pessimistic — people are driven by envy, insecurity, and status-seeking; understanding this is the beginning of wisdom.",
      politicalOntology:
        "Pure personal-strategy realist — the political is one instance of the universal dynamics of power between persons.",
      universalism:
        "Universalist about power laws — the same patterns recur across cultures and eras.",
      individualism:
        "Individualist — the strategist as heroic self-cultivating agent maneuvering through power dynamics.",
      order:
        "Situational tactics — neither designed institutions nor emergent order are the focus; personal maneuver is.",
      authority:
        "Elite — the strategist over the masses, the master over the marks.",
      temporal:
        "Cyclical — the same power patterns recur; the strategist studies history to see the patterns coming.",
    },
    influences: [
      "Machiavelli — ***The Prince*** as founding text",
      "Sun Tzu — ***The Art of War***",
      "Baltasar Gracián — ***The Art of Worldly Wisdom***",
      "Napoleon and von Clausewitz on strategy",
      "The historical case-study tradition (Plutarch, Suetonius)",
    ],
    dissents: [
      "Naive moral politics that ignores actual power dynamics",
      "Corporate self-help that avoids the darker realities of ambition",
      "The pretense that all interaction is honest cooperation",
      "Cancellation of realist analysis in favor of moralizing",
    ],
  },

  {
    name: "Weber",
    fullName: "Max Weber",
    lifespan: "1864–1920",
    image: "/thinkers/weber.jpg",
    wiki: "https://en.wikipedia.org/wiki/Max_Weber",
    axisNotes: {
      epistemology:
        "Neo-Kantian methodology — ***Objectivity in Social Science*** and the ***ideal type*** treat political truths as knowable through disciplined comparative method, but always partial and value-laden.",
      anthropology:
        "Skeptical realist — humans as capable of meaningful action but increasingly caged by rationalized bureaucratic order; ***The Protestant Ethic*** shows how disenchantment reshapes character.",
      politicalOntology:
        "Foundational autonomist — ***Politics as a Vocation*** defines the state as 'the monopoly of the legitimate use of physical force within a given territory,' the touchstone definition for the whole realist tradition.",
      universalism:
        "Comparative sociologist — ***Economy and Society*** and the world-religions studies apply a universalist analytical framework across civilizations while attending to particulars.",
      individualism:
        "Methodological individualist — social action explained through the meaningful acts of individual persons; but no atomistic normative individualism.",
      order:
        "Rational-legal authority as a designed order, but attentive to how tradition and charisma keep intruding — mixed constructivism.",
      authority:
        "Famous three types — traditional, charismatic, rational-legal — with no simple normative winner; the modern state depends on all three in tension.",
      temporal:
        "Declinist within his own framework — 'the iron cage' of rationalization, the disenchantment of the world, are losses even as they enable modern efficiency.",
    },
    influences: [
      "Kant — via the Baden neo-Kantians (Rickert, Windelband)",
      "Nietzsche — disenchantment, will, the psychological interior",
      "Marx — as intellectual sparring partner on causation; ***The Protestant Ethic*** is a partial reply",
      "Wilhelm Dilthey — ***verstehen*** as method",
      "The Historical School of German economics (Schmoller, Roscher)",
    ],
    dissents: [
      "Marxist economic determinism — ***The Protestant Ethic and the Spirit of Capitalism*** is a book-length reply",
      "Positivist claims to a value-free 'explanation' of human action",
      "Bureaucratic reduction of political leadership to administration (***Politics as a Vocation*** argues charisma is still needed)",
      "Naive optimism about progress under rationalization — the iron cage is the price",
      "Romantic anti-modernism that refuses to think in the modern idiom",
    ],
  },

  // ---- Historical strongmen and statesmen ----
  {
    name: "Napoleon",
    fullName: "Napoleon Bonaparte",
    lifespan: "1769–1821 (Emperor of the French)",
    image: "/thinkers/napoleon.jpg",
    wiki: "https://en.wikipedia.org/wiki/Napoleon",
    axisNotes: {
      epistemology:
        "Enlightenment son — rational law codes and administrative science; the ***Code Napoléon*** treats civil order as demonstrably designable.",
      anthropology:
        "Sharply pessimistic — 'men are moved by two levers only: fear and self-interest'; his statecraft assumes it.",
      politicalOntology:
        "Pure realist — 'the moral is to the physical as three to one' and 'religion is what keeps the poor from murdering the rich'; politics as its own domain.",
      universalism:
        "Ambiguous — spread revolutionary universalism (Code, metric system, meritocracy) at bayonet-point across Europe, but ended as a specifically French emperor.",
      individualism:
        "Meritocratic individualism — 'careers open to talents' — inside a state-focused frame that subordinates the person to the imperium.",
      order:
        "Maximally designed — Code, préfets, lycées, Bank of France, Concordat, University of France; a whole administrative apparatus built in a decade.",
      authority:
        "Extreme elite / sovereign — Consul, then Emperor; the plebiscites were legitimating theatre for one-man rule.",
      temporal:
        "Mixed — Enlightenment progressive in reform, but crowned himself, restored aristocracy of merit, and framed himself as new Charlemagne.",
    },
    influences: [
      "Machiavelli — ***The Prince*** was his constant reading; his marginalia survive",
      "Julius Caesar — direct model; the ***Commentaries*** as textbook",
      "Rousseau — early influence, the general will as popular legitimation",
      "The French revolutionary tradition and its Enlightenment antecedents",
      "Frederick the Great as military and administrative model",
    ],
    dissents: [
      "The Bourbon restorationist old-regime aristocracy",
      "British constitutional liberalism and its 'nation of shopkeepers'",
      "The Jacobin Terror as unstable radicalism",
      "The Church's independent temporal authority (hence the Concordat)",
    ],
  },
  {
    name: "Franco",
    fullName: "Francisco Franco",
    lifespan: "1892–1975 (Caudillo of Spain)",
    image: "/thinkers/franco.jpg",
    wiki: "https://en.wikipedia.org/wiki/Francisco_Franco",
    axisNotes: {
      epistemology:
        "Catholic-nationalist truth as concrete and given — no serious epistemic pluralism; the National-Catholic synthesis treated as authoritative.",
      anthropology:
        "Deeply pessimistic — Republican Spain was chaos, Communism was mortal threat; humans need firm hierarchy and religion.",
      politicalOntology:
        "Pure realist — 40 years of authoritarian rule maintained by the calibrated use of terror, cooption, and patronage.",
      universalism:
        "Extreme particularist — Spain, its Catholic identity, its imperial memory; universalism only in nominal Catholic reach.",
      individualism:
        "Collectivist — family, church, nation as the units; corporatist economic structure over individual liberalism.",
      order:
        "Designed authoritarian order — Movimiento Nacional as single party, syndicates, censorship, and the ***Fundamental Laws*** as constitutional replacement.",
      authority:
        "Extreme elite — Caudillo por la gracia de Dios; head of state, government, party, and armed forces.",
      temporal:
        "Restorationist — restore traditional Catholic Spain against modernity, liberalism, socialism, and regionalism.",
    },
    influences: [
      "The Spanish Catholic hierarchy and National Catholicism",
      "Miguel Primo de Rivera — earlier Spanish authoritarian model",
      "José Antonio Primo de Rivera and the Falange (which Franco absorbed)",
      "The Spanish Army colonial and Africanist tradition",
      "Salazar's Portuguese ***Estado Novo*** as adjacent model",
    ],
    dissents: [
      "The Second Spanish Republic and its Popular Front",
      "Communism, socialism, and anarcho-syndicalism (his Civil War enemies)",
      "Basque and Catalan nationalisms",
      "Freemasonry (a particular obsession)",
      "Liberal parliamentary democracy in principle",
    ],
  },
  {
    name: "Hitler",
    fullName: "Adolf Hitler",
    lifespan: "1889–1945 (Führer of Nazi Germany)",
    image: "/thinkers/hitler.jpg",
    wiki: "https://en.wikipedia.org/wiki/Adolf_Hitler",
    axisNotes: {
      epistemology:
        "***Mein Kampf*** presents racial-national 'truths' as concrete and demonstrable via a pseudo-scientific historical narrative.",
      anthropology:
        "Extreme pessimism — life is struggle, blood, and hierarchy; the weak are meant to be dominated by the strong.",
      politicalOntology:
        "Pure realist — politics is struggle for existence between races; totalizing friend/enemy applied to entire peoples.",
      universalism:
        "Extreme racial particularism — no universal humanity, only the biological hierarchy of races.",
      individualism:
        "Extreme collectivist — the Volk absorbs the individual completely; 'the community above the self.'",
      order:
        "Designed but ultimately destructive — Gleichschaltung coordinated all institutions under party control, but the war economy and eventual chaos undermined coherence.",
      authority:
        "Extreme elite / Führerprinzip — one sovereign leader whose word is law, all institutions bent to his will.",
      temporal:
        "Regressive-plus-utopian — restore mythical Aryan past and build 'thousand-year Reich' — declinist critique of Weimar joined to totalitarian futurism.",
    },
    influences: [
      "Houston Stewart Chamberlain and 19th-c racial theorists",
      "Anti-Semitic pamphleteering of Vienna in his youth (Lueger, Schönerer)",
      "Wagner — myth-and-power aesthetic",
      "Ludendorff and the German nationalist right",
      "Distorted readings of Nietzsche and Schopenhauer",
    ],
    dissents: [
      "Weimar liberal democracy",
      "Communism, socialism, and the Marxist left",
      "Jews as the object of a genocidal enmity (the defining evil of the regime)",
      "The Versailles order and its 'humiliation' of Germany",
      "Christianity in its universalist form (as opposed to a 'Positive Christianity' shaped to nationalism)",
    ],
  },
  {
    name: "Stalin",
    fullName: "Joseph Stalin",
    lifespan: "1878–1953 (General Secretary of the CPSU)",
    image: "/thinkers/stalin.jpg",
    wiki: "https://en.wikipedia.org/wiki/Joseph_Stalin",
    axisNotes: {
      epistemology:
        "Dialectical materialism as science — ***Foundations of Leninism*** and ***Dialectical and Historical Materialism*** treat Marxism as concretely knowable.",
      anthropology:
        "Extreme pessimism — enemies everywhere; purges, gulag, and Great Terror as expressions of the view that trust is fatal.",
      politicalOntology:
        "Realist tactics welded to materialist theory; ***Marxism and the National Question*** and his practice both treat politics as its own domain of maneuver.",
      universalism:
        "'Socialism in one country' pulled Marxist universalism toward Soviet particular; Comintern remained but subordinated to Soviet state interest.",
      individualism:
        "Extreme collectivist — collectivization of agriculture, five-year plans, the individual liquidated where inconvenient.",
      order:
        "Maximally designed — planned economy, forced industrialization, the entire Soviet apparatus as one designed system.",
      authority:
        "Extreme elite — the Vozhd, the party, the NKVD; personal dictatorship inside a totalitarian frame.",
      temporal:
        "Progressive Marxist teleology — building socialism against enemies; history moves through the Soviet vanguard.",
    },
    influences: [
      "Lenin — direct successor and self-presented interpreter",
      "Marx and Engels via Lenin's reading",
      "The Bolshevik underground tradition (Georgian expropriations, ***Pravda*** editorship)",
      "Ivan the Terrible and Peter the Great as Russian sovereign models he explicitly cited",
    ],
    dissents: [
      "Trotsky and 'permanent revolution' (the defining rivalry — ended in ice pick)",
      "Bukharin's 'right deviation' (executed 1938)",
      "Kulaks and peasants who resisted collectivization",
      "Nazism and fascism (from 1941; before that the Molotov-Ribbentrop Pact complicates)",
      "Anyone he suspected of disloyalty inside the party",
    ],
  },
  {
    name: "Churchill",
    fullName: "Winston Churchill",
    lifespan: "1874–1965 (UK Prime Minister)",
    image: "/thinkers/churchill.jpg",
    wiki: "https://en.wikipedia.org/wiki/Winston_Churchill",
    axisNotes: {
      epistemology:
        "British empirical + Whig-history — knowable political and moral truths, expressed in the ***History of the English-Speaking Peoples***.",
      anthropology:
        "Skeptical realism — humans are capable of great things when led, and of great cruelty when unchecked; both proved by the war he lived through.",
      politicalOntology:
        "Realist about power — 'I have nothing to offer but blood, toil, tears, and sweat'; ***The Second World War*** is a book about how power actually operates.",
      universalism:
        "The 'English-speaking peoples' as a specific universal — British parliamentary tradition, American constitutional order, common language and law.",
      individualism:
        "Whig-liberal individualist — parliamentary freedoms and property rights as ends, though his imperial views subordinated colonized individuals.",
      order:
        "Traditionalist — the British constitutional order accumulated over centuries; skeptical of blueprint reform (he opposed the Beveridge welfare state instincts at first).",
      authority:
        "Parliamentary aristocratic — the House of Commons + a wartime prime minister with real power delegated by it.",
      temporal:
        "Declinist about the Empire's contraction, heroic-progressive about the war effort; a mix that captures his character.",
    },
    influences: [
      "Gibbon — ***The Decline and Fall of the Roman Empire*** on style and historical vision",
      "Macaulay's Whig history",
      "His father, Lord Randolph Churchill — Tory Democracy tradition",
      "Bourke Cockran (American orator) — early influence on his rhetorical style",
      "Alfred the Great and the English constitutional tradition (his own historical touchstones)",
    ],
    dissents: [
      "Nazism (the defining fight; 'we shall fight on the beaches')",
      "Bolshevism and Stalinism (though wartime ally, always ideological enemy)",
      "Indian independence in its Congress form (a real blemish on his record)",
      "The 1945 Labour welfare state as excessive design (he lost that election)",
      "German rearmament in the 1930s that the appeasers accepted (the ***Gathering Storm*** volume is his indictment)",
    ],
  },
  {
    name: "Pinochet",
    fullName: "Augusto Pinochet",
    lifespan: "1915–2006 (Chilean junta leader, then President)",
    image: "/thinkers/pinochet.jpg",
    wiki: "https://en.wikipedia.org/wiki/Augusto_Pinochet",
    axisNotes: {
      epistemology:
        "Concrete anti-communist truth + Catholic-nationalist framing + Chicago Boys economics as demonstrable — a mixed but confident regime doctrine.",
      anthropology:
        "Extreme pessimism about the left; humans require order enforced by disciplined institutions.",
      politicalOntology:
        "Pure realist — 1973 coup, military junta, and DINA repression executed as a coherent politics-as-power project.",
      universalism:
        "Chilean nationalist particularism; universalism only in nominal Catholic and free-market principles.",
      individualism:
        "Mixed — Chicago Boys individualism in economics (privatization, deregulation) alongside collective national in politics (military discipline).",
      order:
        "Designed — the 1980 constitution, market reforms, pension privatization; a deliberately constructed regime that combined authoritarian politics with liberal economics.",
      authority:
        "Extreme elite — junta leader, then President; personal power inside a military hierarchy.",
      temporal:
        "Restorationist against the Allende period; the 1980 constitution was designed to shape post-Pinochet politics into the future.",
    },
    influences: [
      "The Chilean military tradition (Prussian-influenced)",
      "Cold War anti-communism as ideological frame",
      "The Chicago Boys and their University of Chicago economic training (Friedman, Harberger)",
      "The Doctrine of National Security prevalent among Latin American militaries",
      "Franco's Spain as a reference regime",
    ],
    dissents: [
      "Salvador Allende and the Unidad Popular government (the object of the coup)",
      "The Communist and Socialist parties of Chile",
      "Human rights institutions that documented DINA / CNI abuses",
      "Liberation theology and reformist Catholic clergy",
      "Democratic-restoration efforts (though he did lose the 1988 plebiscite)",
    ],
  },
  {
    name: "Gallus",
    fullName: "Constantius Gallus",
    lifespan: "326–354 AD (Caesar of the East under Constantius II)",
    image: "/thinkers/gallus.jpg",
    wiki: "https://en.wikipedia.org/wiki/Constantius_Gallus",
    axisNotes: {
      epistemology:
        "No systematic thinker — inherited Constantinian-Arian Christian orthodoxy as the given imperial truth; ruled by decree, not doctrine.",
      anthropology:
        "Deeply pessimistic in practice — surrounded by suspected enemies real and imagined; the purges of the Antiochene aristocracy are the record.",
      politicalOntology:
        "Pure realist by conduct — power exercised as pure fear; Ammianus Marcellinus's ***Res Gestae*** (books 14–15) portrays a Caesar who understood nothing but coercion.",
      universalism:
        "Late-Roman imperial universalism (Roman law and Christian faith reaching all subjects) inside a specifically eastern-imperial court frame.",
      individualism:
        "Late-Roman collective — the imperial cult, the ***res publica***, the Christian church; the individual matters only insofar as loyal or suspect.",
      order:
        "Inherited the Diocletianic-Constantinian administrative order; introduced no coherent design of his own beyond repressive innovation.",
      authority:
        "Extreme elite — Caesar with the ***purple***, absolute in his sphere until the Augustus recalled and executed him in 354.",
      temporal:
        "Late-Roman declinist mood — anxiety about civil war, barbarian pressure, Christian-pagan tensions; the era Ammianus writes about as decline from earlier Roman standards.",
    },
    influences: [
      "The Constantinian dynasty — nephew of Constantine the Great, half-brother of Julian the Apostate",
      "His patron and executioner Constantius II — imperial court model",
      "The Diocletianic-Constantinian tetrarchic and administrative reforms as inherited framework",
      "Arian Christianity dominant at the eastern court",
      "The late-Roman court eunuchs and functionaries who shaped his household",
    ],
    dissents: [
      "The Antiochene senatorial aristocracy (whom he purged)",
      "Domitianus, praetorian prefect of the East (executed on Gallus's orders)",
      "The eastern city bureaucracies that resisted his repressive measures",
      "Ultimately Constantius II himself — who summoned him, arrested him, and executed him at Pola",
      "The pagan-classical civic tradition that Ammianus mourns and Gallus disregarded",
    ],
  },
  {
    name: "King Arthur",
    fullName: "King Arthur (legendary)",
    lifespan: "Legendary — post-Roman Britain, ~5th–6th c",
    image: "/thinkers/arthur.jpg",
    wiki: "https://en.wikipedia.org/wiki/King_Arthur",
    axisNotes: {
      epistemology:
        "Christian chivalric moral order as knowable through revelation, quest, and tradition — Malory's ***Le Morte d'Arthur*** and Geoffrey of Monmouth's ***Historia*** treat the ethical order as concrete.",
      anthropology:
        "Skeptical about knights left to themselves — the Code of Chivalry exists because unrestrained warriors will predate on the weak.",
      politicalOntology:
        "Moralist — the Round Table is a moral order first, a political one second; kingship legitimized by moral quest (the Grail).",
      universalism:
        "Christian universalism in principle within a specifically British-Celtic frame; the legend gets universalized as Western myth.",
      individualism:
        "Collective — the fellowship of knights, the quest as shared endeavor; individual glory in service of the Round Table.",
      order:
        "Mixed — inherited Christian kingship + the Round Table as a designed institution to check the mightiest knights.",
      authority:
        "Elite kingship — Arthur as chosen sovereign (sword in the stone) exercising authority over a fellowship of nobles.",
      temporal:
        "Declinist within the story — Camelot rises, is betrayed by adultery and grail-loss, and falls; but 'rex quondam, rexque futurus' — 'the once and future king' — leaves the door open to restoration.",
    },
    influences: [
      "Geoffrey of Monmouth's ***Historia Regum Britanniae*** (~1136) — the tradition's foundation",
      "Chrétien de Troyes — invented Lancelot, the Grail quest, courtly love",
      "Sir Thomas Malory — ***Le Morte d'Arthur*** (1485) consolidated the cycle",
      "The Welsh Mabinogion — earliest strands",
      "Later — Tennyson (***Idylls of the King***), T. H. White (***The Once and Future King***)",
    ],
    dissents: [
      "Saxon invaders and pagan warlords (within the story)",
      "Mordred and treachery within the fellowship",
      "The moral failure of Lancelot-Guinevere adultery",
      "Historical skepticism — as legend, dissent takes the form of scholars denying Arthur existed at all",
    ],
  },
  {
    name: "Bibi",
    fullName: "Benjamin Netanyahu",
    lifespan: "b. 1949 (Prime Minister of Israel)",
    image: "/thinkers/netanyahu.jpg",
    wiki: "https://en.wikipedia.org/wiki/Benjamin_Netanyahu",
    axisNotes: {
      epistemology:
        "Concrete strategic-security truths — ***Bibi: My Story*** and ***A Durable Peace*** frame politics as clear-eyed reading of enduring threats.",
      anthropology:
        "Deeply pessimistic — 'if the Arabs put down their weapons there would be peace; if Israel put down its weapons there would be no Israel'; humans and states respond to strength.",
      politicalOntology:
        "Pure realist — Bibi is a paradigmatic realist operator; ***A Place Among the Nations*** frames Israel's situation in unblinking power-politics terms.",
      universalism:
        "Zionist particularism — the Jewish people, the state of Israel, defensible borders; universalism only in the sense of 'Western civilization vs. its enemies' rhetoric.",
      individualism:
        "Likud economic individualism (privatization, tech economy) inside strong national-collective identity.",
      order:
        "Some designed reform (2023 judicial reform being the most consequential) within an inherited democratic-parliamentary tradition.",
      authority:
        "Electoral strongman blend — parliamentary Prime Minister, but with a personalist coalition and long tenure making the office more presidential in effect.",
      temporal:
        "Declinist about diaspora Judaism and pre-Israel Jewish vulnerability; restorationist about Jewish sovereignty; skeptical of universalist progressive narratives.",
    },
    influences: [
      "Ze'ev Jabotinsky and the Revisionist Zionist tradition — the ***Iron Wall*** doctrine",
      "His father Benzion Netanyahu — historian of the Spanish Inquisition, ideological formation",
      "His brother Yonatan (killed at Entebbe) — mythic personal reference",
      "Menachem Begin and Yitzhak Shamir — direct Likud predecessors",
      "American conservative intellectuals during his time at MIT and later",
    ],
    dissents: [
      "The Israeli Labor left and the two-state framework in its Oslo form",
      "Iran and its proxies (Hezbollah, Hamas) as existential enemies",
      "The 'Deep State' Israeli establishment (military, judicial, media) as anti-Likud",
      "Progressive American Jewish critique of Likud",
      "The Palestinian Authority as unfit peace partner in his view",
    ],
  },
  {
    name: "Caesar",
    fullName: "Gaius Julius Caesar",
    lifespan: "100–44 BC (Roman general, statesman, dictator perpetuo)",
    image: "/thinkers/caesar.jpg",
    wiki: "https://en.wikipedia.org/wiki/Julius_Caesar",
    axisNotes: {
      epistemology:
        "Roman concrete truth about power, war, and politics — ***Commentaries on the Gallic War*** and ***Commentaries on the Civil War*** are simultaneously history and political self-presentation.",
      anthropology:
        "Roman pessimism — humans respond to fear, loyalty, and gain; Caesar's whole political practice presupposes this.",
      politicalOntology:
        "Pure realist — 'the die is cast' at the Rubicon is not a moral moment, it's an operational one; the archetype of the political operator.",
      universalism:
        "Roman universalism through empire — extending citizenship, the ***Lex Julia*** and the incorporation of Gauls into political community.",
      individualism:
        "Roman civic-military collective — the ***res publica***, the legions, the *populus Romanus* as units; the ***gens*** matters more than the isolated individual.",
      order:
        "Designed reforms — Julian calendar, provincial administration, colonies for veterans, reforms to the Senate; a constructivist reform program.",
      authority:
        "Extreme elite — consul, imperator, then dictator perpetuo; the archetype of concentrated personal authority under republican forms.",
      temporal:
        "Progressive within Roman terms — expanding Rome, integrating peoples, opening the political class; but the assassination shows how quickly a legacy contracts.",
    },
    influences: [
      "Sulla — earlier populist-turned-dictator; Caesar reportedly said Sulla resigning the dictatorship was proof he didn't know his political ABCs",
      "Marius — his uncle by marriage; populist military reformer whose faction Caesar inherited",
      "Alexander the Great — direct model of conquest and universal empire",
      "Greek historians and rhetoricians of his education",
      "Cicero as reluctant intellectual counterpart (they used and dueled each other)",
    ],
    dissents: [
      "The optimates — Cato, Bibulus, the traditionalist Senate faction",
      "Pompey — from ally-son-in-law to civil-war enemy",
      "Republican constitutionalism strict-sense (which he suspended)",
      "The idea that the Republic could function as it had; his career is a bet that it could not",
    ],
  },
]

export function findProfile(thinkerName: string): Profile | undefined {
  return profiles.find((p) => p.name === thinkerName)
}
