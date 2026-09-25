---
title: "Spot the Pain"
description: "Master's thesis on skeleton pose estimation for automated pain assessment."
summary: "Master's thesis (2022): can body movement, captured with skeleton pose estimation, recognise, grade, and localise pain - either alone or combined with facial expressions?"
tags: ["machine learning", "deep learning", "pose estimation", "multimodal learning", "health research"]
weight: 10
showTableOfContents: true
---

<!-- markdownlint-disable MD034 -->
{{< button href="https://github.com/angelicagardner/skeleton-pose-estimation-for-pain-assessment" target="_blank" >}}Code{{< /button >}}
{{< button href="https://www.diva-portal.org/smash/record.jsf?pid=diva2:1673390" target="_blank" >}}Thesis{{< /button >}}
<!-- markdownlint-enable MD034 -->

## The Problem

Automated pain assessment can support healthcare and rehabilitation by making
pain measurement more objective. Most research relies on facial expressions,
while body movement, which people also use to express and protect themselves
from pain, has received far less attention.

My Master's thesis at Linnaeus University investigated whether skeleton pose
data could be used on its own, or combined with facial features, for three tasks:

1. **Pain recognition**: is the person in pain?
2. **Intensity estimation**: how strong is the pain?
3. **Area classification**: where is the pain located?

## Approach

I extracted two modalities from video recordings of people performing an
overhead deep squat:

- **Body**: 17 skeleton keypoints per frame with PoseNet
- **Face**: facial action units with OpenFace, based on the Prkachin and
  Solomon Pain Intensity (PSPI) scale

I trained two architectures suited to movement over time, a hybrid CNN-BiLSTM
and a recurrent CNN (RCNN). I compared body-only models with three ways of
combining (fusing) the two modalities:

{{< mermaid >}}
graph TD
    A[Video] --> B[PoseNet: 17 body keypoints]
    A --> C[OpenFace: facial action units]
    B --> D{Fusion strategy}
    C --> D
    D -->|Early| E[Combine inputs]
    D -->|Late| F[Average model scores]
    D -->|Ensemble| G[Weighted model voting]
    E --> H[CNN-BiLSTM / RCNN]
    F --> H
    G --> H
    H --> I[Recognition / Intensity / Area]
{{< /mermaid >}}

## Results

| Task | Best strategy | AUC |
| :--- | :--- | :--- |
| Pain recognition | Body + face ensemble | 0.71 |
| Intensity estimation | Body only (CNN-BiLSTM) | 0.75 |
| Area classification | Late fusion (RCNN) | 0.75 |

Body movement alone was the strongest signal for estimating pain intensity,
and combining it with facial features helped with recognising and localising
pain. This shows that skeleton data is a useful modality for automated pain
assessment, both on its own and alongside facial expressions.

The dataset is private because of ethical and privacy agreements with the
participants, so the repository is provided as a reference for the models
and methods.

## Ideas for Continuation

- **Graph neural networks:** a skeleton is naturally a graph, and
  spatio-temporal graph neural networks capture the dependencies between
  joints better than CNN-BiLSTMs.
- **Transformers for fusion:** cross-attention would let the model learn,
  frame by frame, whether the face or the body is the more reliable signal.
- **Edge deployment:** pose estimation now runs in real time on ordinary
  devices, which would make live clinical feedback possible.
