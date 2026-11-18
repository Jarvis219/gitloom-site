---
title: Actions
group: Accounts & hosting
order: 31
summary: Follow GitHub Actions runs next to their commits, read logs, re-run jobs, start workflows and download artifacts.
updated: 2026-11-18
---

With a GitHub account added, GitLoom shows GitHub Actions runs in the sidebar's ACTIONS group and next to their commits in the graph's CI column.

![The sidebar with a pull request and GitHub Actions runs, and a run's build job open](/shots/actions-light.png)

## Runs and logs

Open a run to see its jobs, annotations and artifacts. Open a job to read its log. The log view can show timestamps, wrap lines, or show only errors, and *Save Log…* keeps a copy.

## Re-run, cancel and start

- *Re-run All Jobs*, *Re-run Failed Jobs* or *Re-run This Job*.
- *Cancel Run*.
- *Run Workflow…* starts a workflow that has a `workflow_dispatch` trigger, with its inputs.
- Download a run's artifacts.

A run from a fork that waits for approval says so, lists the workflow files its pull request changes, and offers *Approve and Run…*. Check the changes first: approved workflows run with the repository's settings.

## Notifications

GitLoom can notify you when a run you started finishes. Choose when in **Settings ▸ Git ▸ GitHub Actions ▸ Notify when CI I started finishes**: never, only when it fails (the default), or always.

> **Note** Actions are for GitHub only. For GitLab, CI pipelines are not supported yet and the Actions group is hidden.
