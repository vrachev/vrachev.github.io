---
title: "Trends in Developer Infrastructure and Tooling - 2024 and Beyond"
pubDate: 2024-01-17
---
<div class="flex flex-col items-center mb-3">
  <img src="/post-images/light-evolution.png" alt="image of sign posts" class="w-full"/>
  <div class="text-center font-barlow font-light text-sm italic">
    What goes around comes back around / Alexander Babich
  </div>
</div>

Thinking about developer trends is one of my favorite parts of [my job](https://www.irregular.vc/team), and I wanted to share some things I’ve been thinking about for 2024 and beyond. An interesting, albeit obvious thing I’ve observed about trends is that they take a long, long time to manifest, especially when it comes to developer infrastructure. It’s hard to pinpoint when a trend that’s been bubbling up for years hits a critical peak right before it becomes mainstream, so rather than attempt to predict the trends that will hit that peak in 2024, I’ll share some ideas that are in various stages in their potential S-curves.

## User Experience Becomes Table Stakes for Developer Products

Some of you might be thinking, “isn’t this just DevEx? Haven’t we had dedicated teams doing this for years”, and yes, we have had that, and we’ve _needed_ that, because the user experience of most developer products suck, and the ecosystem has gotten so complex that we need a team to help drive best practices.

I think the tide is changing, and we’re now seeing products with actual UX baked into it. Between 2010-2020 companies focused on creating infrastructure that scales - we’ve more or less done that, and now the focus is shifting to infrastructure that is pleasant to work with and improves developer speed.

Some areas of focus:

### Fixing the CI/CD problem

We’re slowly realizing that CI/CD is being wildly misused and does not reduce developer iteration cycles. CI/CD is good at what it does, which is to make it easier to merge code changes into production, especially on large teams working on complex projects. But we’ve been abusing CI/CD by using it _while_ working on code changes. It’s not the dev’s fault - the problem is that tech stacks have gotten very complex and can no longer be tested locally. So devs just push to GitHub and wait 15 minutes for tests to run. Nice for coffee runs, not so much for productivity.

We’re starting to see this change, with solutions that enable developers to bypass CI/CD during active development but get similar feedback in seconds instead of minutes. There’s a number of approaches here. Local emulation is an interesting one, with a few examples like [Wing Cloud](https://www.wing.cloud/), [LocalStack](https://www.localstack.cloud/), and [System Initiative](https://www.systeminit.com/). We’re also seeing cloud-connected developer environments. There’s CDEs - like [GitPod](https://www.gitpod.io/) and GitHub codespaces which handle environment set up steps like installing dependencies. There’s also approaches to connect local environments with cloud resources - one example being [Ampt](https://getampt.com/), which has a REPL-like UX where every code change locally updates the live deployment (unique environment per branch) in real-time.

### Static environments -> Dynamic ephemeral environments

Traditional environment setups amount to a set of 3 or so environments, named something like “QA/Staging/Prod”. Naturally, this presents a host of issues when you have multiple people relying on a single environment for testing. For some reason it’s taken the industry a long time to either realize this and/or do something about it.

In the last year or so, we’ve started seeing a number of startups offering the solution - ephemeral environments. Instead of a static set of environments, users are able to get fresh, on-demand environments with production-matching services and seeded DBs. Qovery (our wonderful portfolio company!) has written about this and has a [list of competitors](https://www.qovery.com/blog/top-10-ephemeral-environments-solutions/) in the space.

### Modern terminals

Terminals have been more or less unchanged in 20 years, and we’ve grown so accustomed to them that my first reaction to [Warp](https://www.warp.dev/) was along the lines of “You can do that? Just make a new terminal?”. Mostly this is a compliment to the traditional terminal, which I think is different from most of what I talk about here in that the UX is quite good - but I’m nonetheless very interested in seeing what happens here. The number of companies in this space and the level of funding (Warp recently raised a [$50M series B](https://www.finsmes.com/2023/06/warp-raises-50m-series-b-funding-round.html) - in the midst of a growth investing drought no less) supports the view that UX is not just a nice-to-have.

### AI Tooling

I mostly ignore AI in this article, partly as a silent protest against the never-ending onslaught of AI content, and partly because it’s a muddy area with little extractable signal. But perhaps the one trend that has already developed is the use of AI in evolving the developer workflow. First it was [Github Copilot](https://github.com/features/copilot) with its fancy auto-complete, then we started getting code editors with native ChatGPT support like [Cursor](https://cursor.sh/), and more recently we’re seeing PR generating bots like [Sweep](https://sweep.dev/) and [Ellipses](https://www.ellipsis.dev/). Partly, this is about increasing developer speed - but it’s also about finding the right UX in this new age. I suspect this will continue to change over the next few years, and it’ll be interesting to see where we end up.

## Cost Reduction Driven Innovation

In 2022 and 2023, the post-ZIRP economy forced companies to pay attention to a previously long ignored aspect of the income statement - the bottom line. It seems crazy to think that we collectively ignored the primary goal a business has (generate profit) for more than a decade, but when capital is cheap we collectively rationalize a lot of bizarre behavior in the name of growth.

The transition from top-line to bottom-line focus has been brutal for the startup world, particularly companies who raised at high valuations in 2020 and 2021, but it has also created a new opportunity for startups to compete on, and we’re seeing a number of new architectural trends in the developer infrastructure world borne out of this new constraint.

Most of the architectural changes I see are from teams hypothesizing that the metrics and functionality that customers cared about in the last decade are the wrong ones and that we need to change the tradeoffs we make to align with the post-ZIRP reality.

Cost optimization is happening everywhere and in many forms, but I’m more interested in products built from the ground up with cost as a key objective. I’ll share a few approaches I’ve seen.

### Leveraging Hardware Improvements in Data Infrastructure

Earlier I wrote:

> Between 2010-2020 companies focused on creating infrastructure that scales - we’ve more or less done that, and now the focus is shifting to infrastructure that is pleasant to work with and improves developer speed.

I left out the reasons behind why this shift is possible, namely (1) the vast majority of companies are (surprise!) not at Google scale, and (2) hardware has improved so much over the last 10 years that many infrastructure needs can be met without needing massive systems.

Data in particular is seeing a reinvention towards a simpler and cheaper tech stack. [Modern Data Stack in a Box with DuckDB](https://duckdb.org/2022/10/12/modern-data-stack-in-a-box.html) - a fantastic post, is the closest thing to prophesying what this future will look like. Of course, a single node data stack is more of an exercise in possibilities - we may still want extra nodes for reliability and such, but it’s probably not an exaggeration to say that most data computing needs can be fulfilled in a single node with current hardware (and I don’t just mean using [AWS’s insane 24TiB memory EC2 instances](https://aws.amazon.com/ec2/instance-types/high-memory/)).

Tools like [DBT](https://www.getdbt.com/), [DLT](https://dlthub.com/) and [DuckDB](https://duckdb.org/) (amongst a myriad of competitors) are working to create a vastly simpler future, and thanks to hardware advances like the Apple M chips, previously “large-scale” end-to-end pipelines can now run locally. This will have big implications for data professionals, both by making development a lot easier but also unlocking new capabilities (eg. distributed pipelines on the edge/client or pipelines running on Lambda).

### Distributed Systems Built on Top of Blob Storage (S3)

This has long been the case with data warehouses, data lakes and the such. But we’re starting to see companies in other areas such as streaming, queuing, observability and monitoring. The founders behind Warpstream have written some great [content](https://www.warpstream.com/blog/kafka-is-dead-long-live-kafka) on the rationale behind using S3 and the potential to reduce costs by an order of magnitude.

The idea behind this is fairly simple. S3 is a persistent, highly fault tolerant, and nigh infinitely horizontally scalable K/V store that is significantly cheaper than disk based stores (in most cases at least - some caveats around file sizing and API costs). The big tradeoff here is the latency cost of S3. With block storage one can achieve sub-10ms latency, with S3 p99 latency is closer to 50x that. Clearly this won’t work for very latency sensitive systems, but many - perhaps most - systems, have requirements that allow for 500ms latency with no service degradation.

It makes sense that blob storage was first used with data warehouses, as the use-cases services there are traditionally (1) batch based, (2) historical and (3) analytical instead of operational. Companies want to store _all_ their data, but don’t know if or when they’ll need it, and so blob storage was a natural candidate. But now founders are asking whether there are more cases where the use-cases are not quite as latency driven as we thought - and what that unlocks.

Relatedly, minimizing networking costs (egress/ingress) is another key drive. Optimizing cloud costs in general is in vogue, and cloud networking fees are particularly exorbitant (eg. [59% of cost](https://www.confluent.io/blog/understanding-and-optimizing-your-kafka-costs-part-1-infrastructure/#base-workload) for a Kafka deployment).

We’re seeing infrastructure companies building with networking costs as an underlying constraint, and so are designing their architecture to try and minimize data movement - eg. using blob storage, shifting processing closer to the edge or client, pre-processing information etc..
