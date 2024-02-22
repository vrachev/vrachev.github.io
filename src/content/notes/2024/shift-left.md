---
title: "So You Want to Shift Left"
pubDate: 2024-02-15
---
<div class="flex flex-col items-center mb-3">
  <img src="/post-images/sign-posts.png" alt="image of sign posts" class="w-full"/>
  <div class="text-center font-barlow font-light text-sm italic">
    Shift-left, shift-right, shift-everywhere??
  </div>
</div>

Shift-left, shift-right, shift-everywhere??

Shift-left is a popular buzzword in the developer world, with countless pitch decks and marketing copy promising to shift left everything. The movement started gaining popularity with DevOps, the aim being to connect the traditionally disjointed fields of development and operations, and has now grown to include any permutation of business function X and Ops you can think of. DevSecOps, DataOps, MLOps, GitOps, FinOps, ChatOps ([no seriously](https://www.atlassian.com/blog/software-teams/what-is-chatops-adoption-guide)). So what is this all about, and is it just marketing hoopla?

Shift-left is not particularly new. The term has been around since at [least 2001](https://www.drdobbs.com/shift-left-testing/184404768), and the idea itself has been thrown around even earlier. Essentially, it means moving a process (be it testing, managing deployments, monitoring etc..) earlier into the development lifecycle. The advantages make intuitive sense: moving operational processes closer to the development stage results in less friction, better integrations and greater resilience. It’s also a common sales pitch from infra companies. They’ll talk about how developers are now empowered to manage X, resulting in faster iteration cycles and cost savings from not needing whoever used to handle X. Sounds great? Maybe.

## When does shift-left work and when does it fail?

### #1 Shift-left done wrong increases cognitive cost for developers and overall complexity

For any of you reading this, particularly if you are a software engineer, do you ever feel like you have too many responsibilities? Or that you need to have so many horizontal skills to do the job? If this resonates with you, then you might be paying the cost of shifting left.

The core idea behind shift-left is to move things that were being done later to being done earlier, but a common pitfall is work being introduced that was never done in the first place! There are a few reasons why this keeps happening.

- Team norms and rules around software are rigid and apply to all projects, regardless of size, scope and requirements. Once a practice is shifted left and adopted for one codebase, it often becomes a requirement for all codebases.  
- Engineers like to optimize for maximum robustness and try to [automate](https://xkcd.com/1319/) everything. They’re also financially incentivized to do so in many orgs. Many teams and engineers are not judged by how they contribute to the bottom line but by how complex the work they do is.   
- Not wanting to buy, only wanting to build.  
- Sometimes the requirements change or you have to enable a use-case that wasn’t possible before. In these cases, the added complexity might be necessary.
    

When a new responsibility is shifted left onto an engineer without proper tooling and abstractions, it comes with a big huge productivity hit. Sometimes this is necessary, but we should strive to figure out the ROI and costs associated. It’s great to want to an app the scales horizontally to handle traffic spikes, supports failovers and is connected to an APM tool for all sorts of usage telemetry, but if your app is used internally by 2 people it’s probably better to just write a quick jupyter notebook and start getting immediate ROI. Partly this becomes a battle of premature optimization vs potential tech debt. Finding a good balance is important.

### #2 With the right motivation, shift-left can reduce blockers and enable autonomy

Shift-left fails when it’s motivated by the wrong things: cutting costs (never happens), copying trendy processes, or adding complexity for vanity. At its core, shift-left is just the reorientation of process (you can also shift right, or add process in both directions). The goal is to figure out when a process step would be more successful if pushed left. Usually this is true when the current process is incredibly disjointed/siloed, brittle, and so stretched out that the incentives for success are lost in the confusion. Shifting left well requires a lot of work—good tooling, internal scaffolding (eg. platform/security teams), and a focus on reducing end-user complexity—but it can dramatically improve iteration speed, create stronger stakeholder/developer alignment and reduce overall pain. “Shift-left testing” is a classic example of this and is now the standard at modern companies. With a robust test suite and a well set up CI/CD pipeline, it may take just a few minutes for a code change to go from PR approval to production. This is much better than having manual QA for every change.

### #3 Not everything needs to be shifted left

Above I mentioned that shifting left is simply the reorientation of process. Well, sometimes process needs to be to the right, or in the center, or be a part of multiple steps (people are calling this shift-everywhere). [Jeff Williams](https://www.linkedin.com/in/planetlevel/) has a [fantastic post](https://developersalliance.org/security-testing-beware-shifting-left-shift-smart-instead/?) on how to think this through. Though he writes specifically about security processes, the ideas are applicable to other fields. Here’s an example he mentions that should be shifted right:

> **Authentication and authorization**. Testing for these vulnerabilities is challenging. These functions almost certainly use custom code unique to the particular application, requiring manual testing such as pen testing. These vulnerabilities should be tested regularly, perhaps every year. Shift right. Far right.

Don’t just mindlessly shift left!

### #4 Opportunities for founders

The big theme here is the importance of reducing complexity and empowering people to build faster and better. Shift-left is an approach to try and do this, but the crux is in the tooling that makes this possible. Without CI/CD engines, continuous delivery is not possible. Without the cloud, releasing a new app means racking up a server yourself. Companies that transfer complexity from users to their own product will succeed here. Cloud databases are another example here, and near and dear to my heart (I used to work at MongoDB). Today, when I’m working on a new side-project I can provision a robust, scalable database in minutes by going to a cloud DB vendor. When I worked at MongoDB and was still an engineer, we managed our own database for the internal apps we maintained. No need for a DBA or physical racks. This is the best kind of shift-left - I get autonomy, iteration speed, and arguably less complexity despite additional responsibilities.

If you’re working on infrastructure or tooling that alleviates pain, I’d love to hear from you at vlad@irregex.vc!
