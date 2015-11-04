data = [{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 10:46:33 PM","query":"SELECT   *   FROM [billhowe].[table_reuters_terms.csv]","id":"15372"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 10:52:37 PM","query":"SELECT   * FROM [billhowe].[table_reuters_terms.csv]","id":"15374"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 10:53:45 PM","query":"SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id","id":"15377"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 10:55:15 PM","query":"SELECT   term_id, [billhowe].[table_reuters_terms.csv].frequency\/docMax.maxF FROM [billhowe].[table_reuters_terms.csv] JOIN (SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id) docMax ON [billhowe].[table_reuters_terms.csv].doc_id = docMax.doc_id","id":"15378"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 10:59:09 PM","query":"SELECT   term_id, CAST([billhowe].[table_reuters_terms.csv].frequency AS FLOAT)\/CAST(docMax.maxF AS FLOAT) FROM [billhowe].[table_reuters_terms.csv] JOIN (SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id) docMax ON [billhowe].[table_reuters_terms.csv].doc_id = docMax.doc_id","id":"15381"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 11:00:54 PM","query":"SELECT   freq.term_id, freq.doc_id, CAST(freq.frequency AS FLOAT)\/CAST(docMax.maxF AS FLOAT)   FROM [billhowe].[table_reuters_terms.csv] freq JOIN (SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id) docMax ON freq.doc_id = docMax.doc_id","id":"15385"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 11:07:45 PM","query":"SELECT tf.term_id, tf.doc_id, tf.tf*idf.idf AS tf_idf FROM   (SELECT   term_id,   LOG((SELECT COUNT(DISTINCT doc_id) FROM [billhowe].[table_reuters_terms.csv])   \/COUNT(DISTINCT doc_id)) idf   FROM [billhowe].[table_reuters_terms.csv]   GROUP BY term_id) idf JOIN   (SELECT     freq.term_id, freq.doc_id, CAST(freq.frequency AS FLOAT)\/CAST(docMax.maxF AS FLOAT) AS tf     FROM [billhowe].[table_reuters_terms.csv] freq   JOIN (SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id) docMax     ON freq.doc_id = docMax.doc_id) tf ON idf.term_id = tf.term_id","id":"15388"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 11:09:21 PM","query":"SELECT tf.term_id, tf.doc_id, tf.tf*idf.idf AS tf_idf FROM   (SELECT   term_id,     LOG(CAST((SELECT COUNT(DISTINCT doc_id) FROM [billhowe].[table_reuters_terms.csv]) AS FLOAT)     \/CAST(COUNT(DISTINCT doc_id) AS FLOAT)) idf   FROM [billhowe].[table_reuters_terms.csv]   GROUP BY term_id) idf JOIN   (SELECT     freq.term_id, freq.doc_id, CAST(freq.frequency AS FLOAT)\/CAST(docMax.maxF AS FLOAT) AS tf     FROM [billhowe].[table_reuters_terms.csv] freq   JOIN (SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id) docMax     ON freq.doc_id = docMax.doc_id) tf ON idf.term_id = tf.term_id","id":"15389"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 11:09:50 PM","query":"SELECT tf.term_id, tf.doc_id, tf.tf*idf.idf AS tf_idf FROM   (SELECT   term_id,     LOG(CAST((SELECT COUNT(DISTINCT doc_id) FROM [billhowe].[table_reuters_terms.csv]) AS FLOAT)     \/CAST(COUNT(DISTINCT doc_id) AS FLOAT)) idf   FROM [billhowe].[table_reuters_terms.csv]   GROUP BY term_id) idf JOIN   (SELECT     freq.term_id, freq.doc_id, CAST(freq.frequency AS FLOAT)\/CAST(docMax.maxF AS FLOAT) AS tf     FROM [billhowe].[table_reuters_terms.csv] freq   JOIN (SELECT doc_id, MAX(frequency) AS maxF FROM [billhowe].[table_reuters_terms.csv] GROUP BY doc_id) docMax     ON freq.doc_id = docMax.doc_id) tf ON idf.term_id = tf.term_id ORDER BY tf_idf DESC","id":"15390"},{"owner":"adamcorn@washington.edu","date":"11\/6\/2012 11:13:21 PM","query":"select tf.term_id, tf.doc_id, tf.tf*idf.idf as tf_idf from   (select   term_id,     log(cast((select count(distinct doc_id) from [billhowe].[table_reuters_terms.csv]) as float)     \/cast(count(distinct doc_id) as float)) idf   from [billhowe].[table_reuters_terms.csv]   group by term_id) idf join   (select     freq.term_id, freq.doc_id, cast(freq.frequency as float)\/cast(docmax.maxf as float) as tf     from [billhowe].[table_reuters_terms.csv] freq   join (select doc_id, max(frequency) as maxf from [billhowe].[table_reuters_terms.csv] group by doc_id) docmax     on freq.doc_id = docmax.doc_id) tf on idf.term_id = tf.term_id","id":"252318"}];
