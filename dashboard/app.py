# dashboard/app.py

import dash
from dash import dcc, html, dash_table
from dash.dependencies import Output, Input
import pandas as pd
import plotly.express as px
import os

app = dash.Dash(_name_)
app.title = "Sentiment Dashboard"
csv_path = "output/classified_chats.csv"

app.layout = html.Div([
    html.H1("Real-Time Sentiment Dashboard", style={"textAlign": "center"}),

    html.Div(id="total-count", style={"fontSize": "24px", "textAlign": "center", "marginBottom": "20px"}),

    html.Div([
        dcc.Graph(id="sentiment-bar", style={"display": "inline-block", "width": "49%"}),
        dcc.Graph(id="satisfaction-bar", style={"display": "inline-block", "width": "49%"})
    ]),

    html.H4("Latest 5 Posts", style={"marginTop": "30px", "textAlign": "center"}),
    dash_table.DataTable(
        id='recent-table',
        columns=[
            {"name": "Timestamp", "id": "timestamp"},
            {"name": "Platform", "id": "platform"},
            {"name": "Text", "id": "text"},
            {"name": "Sentiment", "id": "sentiment"},
            {"name": "Satisfaction", "id": "satisfaction"},
        ],
        style_table={"overflowX": "auto"},
        style_cell={"textAlign": "left", "padding": "5px"},
        style_header={"fontWeight": "bold"},
        page_size=5
    ),

    dcc.Interval(id="interval", interval=5000, n_intervals=0)
])

@app.callback(
    [Output("sentiment-bar", "figure"),
     Output("satisfaction-bar", "figure"),
     Output("recent-table", "data"),
     Output("total-count", "children")],
    [Input("interval", "n_intervals")]
)
def update_dashboard(_):
    if not os.path.exists(csv_path):
        return dash.no_update

    df = pd.read_csv(csv_path)
    if df.empty:
        return dash.no_update

    sentiment_fig = px.bar(df["sentiment"].value_counts().reset_index(),
                           x="index", y="sentiment",
                           labels={"index": "Sentiment", "sentiment": "Count"},
                           title="Sentiment Distribution")

    satisfaction_fig = px.bar(df["satisfaction"].value_counts().reset_index(),
                              x="index", y="satisfaction",
                              labels={"index": "Satisfaction", "satisfaction": "Count"},
                              title="Satisfaction Distribution")

    recent_data = df.tail(5)[["timestamp", "platform", "text", "sentiment", "satisfaction"]].iloc[::-1].to_dict("records")
    total_count = f"Total Messages Processed: {len(df)}"

    return sentiment_fig, satisfaction_fig, recent_data, total_count

if _name_ == "_main_":
    app.run_server(debug=True)