SELECT teacher_id, count(distinct subject_id) as cnt
    FROM Teacher t
    GROUP BY t.teacher_id