
# 🎯 Real-Time Sentiment & Viewer Satisfaction Analysis on Live Streaming Data

This project performs **real-time sentiment and satisfaction analysis** on live chat data from **Twitch** and **YouTube**, using a fine-tuned DistilBERT model trained on the GoEmotions dataset. Results are visualized in an interactive dashboard built with Dash.

---

## 🚀 Features

- 🔄 Live data ingestion from Twitch and YouTube via **Kafka**
- 🧠 **Fine-tuned DistilBERT** on GoEmotions: detects emotions (e.g., happy, bored, confused) and sentiment
- 🗃️ Kafka consumer processes and logs classified data to CSV
- 📊 **Live dashboard** with clean and dark themes
- 🧱 Modular and organized code structure

---

## ⚙️ Prerequisites

- Python 3.8+
- Java 8+ (JDK)
- Apache Kafka & Zookeeper
- Node.js *(optional, for advanced metrics)*
- GPU *(optional, recommended for faster inference)*

---

## 🏁 Getting Started

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/your-username/stream-sentiment-analyzer
cd stream-sentiment-analyzer
```

### 2. 🐍 Set Up a Virtual Environment

```bash
python -m venv myenv
myenv\Scripts\activate  # On Windows

pip install -r requirements.txt
```

---

## 🧠 Model Information

- **Trained model**: `models/best_model.pt`
- **Inference logic**: `model/infer.py`
- **Emotion to satisfaction mapping** included in inference module

---

## ⚡ Kafka Setup (Windows)

> Ensure Kafka and Zookeeper are installed.

### 1. Start Zookeeper

```bash
bin\windows\zookeeper-server-start.bat config\zookeeper.properties
```

### 2. Start Kafka Broker

```bash
bin\windows\kafka-server-start.bat config\server.properties
```

---

## 📡 Running the System

### Step 1: Start Twitch & YouTube Producers

Before running, configure:

- `config/twitch_keys.py`
- `config/youtube_keys.py`

Then execute:

```bash
python ingestion/twitch_producer.py
python ingestion/youtube_producer.py
```

### Step 2: Start Kafka Consumer

This will:
- Listen to `stream_chat` topic
- Run real-time classification
- Output results to `output/classified_chats.csv`

```bash
python streaming/kafka_consumer.py
```

---

## 📊 Launch Dashboard

```bash
python dashboard/app.py
```

Visit: [http://127.0.0.1:8050](http://127.0.0.1:8050)

---

## 📁 Project Structure

```
Streaming-Analysis-RA2211027010051/
├── config/
│   ├── twitch_keys.py
│   └── youtube_keys.py
├── ingestion/
│   ├── twitch_producer.py
│   └── youtube_producer.py
├── model/
│   ├── infer.py
│   └── optimized_distillbert_qos.pt
├── streaming/
│   └── kafka_consumer.py
├── dashboard/
│   ├── app_clean.py
│   └── app_rich.py
├── output/
│   └── classified_chats.csv
├── requirements.txt
└── README.md
```

---

## 📚 Dataset

- **GoEmotions** (Google Research): 28 fine-grained emotion labels
- Emotion labels are mapped into:
  - **3 Satisfaction types**
  - **2 Sentiment classes**

---

## 🙌 Acknowledgements

- [🤗 Hugging Face Transformers](https://huggingface.co/)
- [GoEmotions Dataset – Google Research](https://github.com/google-research/goemotions)
- [Apache Kafka](https://kafka.apache.org/)
- [Dash by Plotly](https://dash.plotly.com/)

---

## 🔮 Future Enhancements

- 🌀 Sarcasm and toxicity detection
- 🌐 Multilingual sentiment support
- 🔔 Real-time alerts for content moderation
